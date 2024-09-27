(() => {
    const informationIconsConfigs = [
        {
            typeName: "undergroundOpenPit",
            tipsText: "Underground & Open pit",
            tipsLink: "#",
        },
        {
            typeName: "undergroundPit",
            tipsText: "Underground pit",
            tipsLink: "#",
        },
        {
            typeName: "openPit",
            tipsText: "Open pit",
            tipsLink: "#",
        },
        {
            typeName: "cementedPasteBackfill",
            tipsText: "Cemented paste backfill",
            tipsLink: "#",
        },
        {
            typeName: "cementedHydraulicFill",
            tipsText: "Cemented hydraulic fill",
            tipsLink: "#",
        },
        {
            typeName: "cementedRockfill",
            tipsText: "Cemented rockfill",
            tipsLink: "#",
        },
        {
            typeName: "cementedBackfillUndefined",
            tipsText: "Cemented backfill (undefined)",
            tipsLink: "#",
        },
        {
            typeName: "unconsolidatedRockfill",
            tipsText: "Unconsolidated rockfill",
            tipsLink: "#",
        },
        {
            typeName: "undefinedBackfill",
            tipsText: "Undefined backfill",
            tipsLink: "#",
        },
        {
            typeName: "indirectOwner",
            tipsText: "Indirect owner </br>(e.g. through a subsidiary, a JV, etc.)",
            tipsLink: "#",
        },
        {
            typeName: "direct",
            tipsText: "Direct",
            tipsLink: "#",
        },
        {
            typeName: "calculatedByAi",
            tipsText: "Calculated by AI",
            tipsLink: "#",
        },
        {
            typeName: "forecast",
            tipsText: "Forecast",
            tipsLink: "#",
        },
        {
            typeName: "netOfByProduct",
            tipsText: "Net of By-product",
            tipsLink: "#",
        },
        {
            typeName: "forecastCombinedProduction",
            tipsText: "Forecast/Combined Production",
            tipsLink: "#",
        },
        {
            typeName: "electricVehicle",
            tipsText: "Electric Vehicle",
            tipsLink: "#",
        },
        {
            typeName: "automaticVehicle",
            tipsText: "Automatic Vehicle",
            tipsLink: "#",
        },
        {
            typeName: "required",
            tipsText: "Required",
            tipsLink: "#",
        },
        {
            typeName: "equivalent",
            tipsText: "Equivalent",
            tipsLink: "#",
        },
        {
            typeName: "production",
            tipsText: "Production",
            tipsLink: "#",
        },
        {
            typeName: "depthUnknown",
            tipsText: "Depth unknown",
            tipsLink: "#",
        },
        {
            typeName: "reservesUnknown",
            tipsText: "Reserves Unknown",
            tipsLink: "#",
        },
        {
            typeName: "reservesUnknown2",
            tipsText: "Reserves unknown",
            tipsLink: "#",
        },
        {
            typeName: "reservesUnknown3",
            tipsText: "Reserves unknown",
            tipsLink: "#",
        },
        {
            typeName: "openPitType",
            tipsText: "openPit",
            tipsLink: "#",
        },
        {
            typeName: "permitting",
            tipsText: "permitting",
            tipsLink: "#",
        },
        {
            typeName: "circleType",
            tipsText: "start, PFS, Feasibility, PEA",
            tipsLink: "#",
        },
        {
            typeName: "inProgress",
            tipsText: "in progress",
            tipsLink: "#",
        },
        {
            typeName: "finish",
            tipsText: "finish",
            tipsLink: "#",
        },
        {
            typeName: "lock",
            tipsText: "please subscribe",
            tipsLink: "#",
        },


    ];

    function determineIsMobile() {
        let match = window.matchMedia || window.msMatchMedia;
        if(match) {
            let mq = match("(pointer:coarse)");
            return mq.matches;
        }
        return false;
    }

    const isMobile = determineIsMobile();

    window.addEventListener('load', () => {
        let timeoutId;
        const typeTips = document.querySelectorAll('[data-type-tips]');

        typeTips.forEach(element => {
            let informationIconsConfigId = element.getAttribute('data-type-tips');
            let informationIconsConfig = informationIconsConfigs.find(e => e.typeName === informationIconsConfigId);
            if (informationIconsConfig) {

                if (isMobile) {
                    element.addEventListener("click", (event) => {
                        const existingTip = element.querySelector('.tippy-wrap');
                        if (existingTip) {
                            removeTips(element);
                            return;
                        }

                        if (timeoutId) {
                            clearTimeout(timeoutId);
                        }

                        timeoutId = setTimeout(() => {
                            const boxForTips = event.target.closest('[data-type-tips]');
                            createTips(boxForTips, informationIconsConfig);

                            document.addEventListener('click', function outsideClickListener(e) {
                                if (!boxForTips.contains(e.target)) {
                                    removeTips(boxForTips);
                                    document.removeEventListener('click', outsideClickListener);
                                }
                            });
                        }, 200);
                    });
                } else {
                    element.addEventListener("mouseover", (event) => {
                        if (timeoutId) {
                            clearTimeout(timeoutId);
                        }

                        timeoutId = setTimeout(() => {
                            const boxForTips = event.target.closest('[data-type-tips]');
                            createTips(boxForTips, informationIconsConfig, timeoutId);
                        }, 200);
                    });

                    element.addEventListener("mouseout", (event) => {
                        if (timeoutId) {
                            clearTimeout(timeoutId);
                        }
                        if (!event.relatedTarget || !element.contains(event.relatedTarget)) {
                            removeTips(element);
                        }
                    });
                }

            }
        });
    });

    function createTips(box, tipsInfo, timeoutId) {
        if (box.querySelector('.tippy-wrap')) {
            return;
        }

        const tippyBox = document.createElement('div');
        tippyBox.className = 'tippy-wrap';
        tippyBox.style.opacity = '0';

        const tippyContent = document.createElement('div');
        tippyContent.className = 'tippy-content';

        const link = document.createElement('span');
        link.className = 'tippy-tooltip-text-link';
        link.innerHTML = tipsInfo.tipsText;

        tippyContent.appendChild(link);
        tippyBox.appendChild(tippyContent);

        const arrow = document.createElement('div');
        arrow.className = 'tooltip-arrow';

        const targetRect = !isMobile ? box.querySelector('.tips-box').getBoundingClientRect() : box.getBoundingClientRect();
        const arrowWidth = 8;

        if (targetRect.width === 0) {
            arrow.style.left = `5px`;
        } else {
            arrow.style.left = `${(targetRect.width / 2) - (arrowWidth / 2)}px`;
        }

        tippyBox.appendChild(arrow);

        box.querySelector('.tips-box').appendChild(tippyBox);

        $(tippyBox).animate({ opacity: 1 }, 300);

        // Add events for mouseover on the tooltip itself
        tippyBox.addEventListener("mouseover", () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        });

        tippyBox.addEventListener("mouseout", (event) => {
            if (!event.relatedTarget || !tippyBox.contains(event.relatedTarget)) {
                removeTips(box);
            }
        });
    }

    function removeTips(box) {
        const tippyWrap = box.querySelector('.tippy-wrap');
        if (tippyWrap) {
            $(tippyWrap).fadeOut(300, function () {
                tippyWrap.remove();
            });
        }
    }
})();
