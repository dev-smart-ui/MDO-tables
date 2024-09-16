window.addEventListener('load', ()=>{
    const saveAlertsBtn = document.getElementById('saveAlerts');
    const selectAllBtn = document.getElementById('selectAll');
    const deselectAllBtn = document.getElementById('deselectAll');
    const checkboxes = document.querySelectorAll('[data-checkbox-alert]');
    const radioBtns = document.querySelectorAll('[data-radio-btn-alert ]');

    //  for updating the state of the Save Alerts button
    function updateSaveButton() {
        let anyChecked = false;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                anyChecked = true;
            }
        });


        if (anyChecked) {
            saveAlertsBtn.classList.remove('active');
            saveAlertsBtn.disabled = false;
            saveAlertsBtn.textContent = 'Save Alerts';
        } else {
            saveAlertsBtn.disabled = true;
            saveAlertsBtn.classList.remove('active');
            saveAlertsBtn.textContent = 'Save Alerts';
        }
    }

    // Logic for selecting all checkboxes
    selectAllBtn.addEventListener('click', () => {
        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
        });
        updateSaveButton();
    });

    // Logic for deselecting all checkboxes
    deselectAllBtn.addEventListener('click', () => {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        updateSaveButton();
    });

    // Logic for deselecting all checkboxes
    saveAlertsBtn.addEventListener('click', () => {
        let selectedValues = {
            checkboxes:[],
            radio:[],
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

    // Updating the button state when the checkboxes state changes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            updateSaveButton();
        });
    });
})