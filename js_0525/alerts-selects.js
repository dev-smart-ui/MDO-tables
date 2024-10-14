window.addEventListener('load', () => {
    const saveAlertsBtn = document.getElementById('saveAlerts');
    const selectAllBtn = document.getElementById('selectAll');
    const deselectAllBtn = document.getElementById('deselectAll');
    const checkboxes = document.querySelectorAll('[data-checkbox-alert]');
    const radioBtns = document.querySelectorAll('[data-radio-btn-alert]');

    function updateSaveButton() {
        let anyChecked = false;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                anyChecked = true;
            }
        });

        if (anyChecked) {
            saveAlertsBtn.classList.remove('active');
            saveAlertsBtn.textContent = 'Save Alerts';
        } else {
            saveAlertsBtn.classList.remove('active');
            saveAlertsBtn.textContent = 'Save Alerts';
        }
    }

    function addClickAndTouchListener(element, callback) {
        element.addEventListener('click', callback);
        element.addEventListener('touchstart', callback);
    }

    // Logic for selecting all checkboxes
    addClickAndTouchListener(selectAllBtn, () => {
        selectAllBtn.classList.add("active");

        setTimeout(() => {
            selectAllBtn.classList.remove("active");
        }, 500);

        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
        });
        updateSaveButton();
    });

    // Logic for deselecting all checkboxes
    addClickAndTouchListener(deselectAllBtn, () => {
        deselectAllBtn.classList.add("active");

        setTimeout(() => {
            deselectAllBtn.classList.remove("active");
        }, 500);

        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        updateSaveButton();
    });

    // Logic for saving selected alerts
    addClickAndTouchListener(saveAlertsBtn, () => {
        let selectedValues = {
            checkboxes: [],
            radio: [],
        };
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                selectedValues.checkboxes.push(checkbox.getAttribute('data-checkbox-alert').trim());
            }
        });

        radioBtns.forEach(radioBtn => {
            if (radioBtn.checked) {
                selectedValues.radio.push(radioBtn.value.trim());
            }
        });

        console.log('Selected Alerts:', selectedValues);
        saveAlertsBtn.classList.add('active');
        saveAlertsBtn.textContent = 'Saved Alerts';
    });

    // Update button state when checkboxes change
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            updateSaveButton();
        });
    });
});
