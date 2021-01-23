export function getTempUnit() {
    return localStorage.getItem('temp') || 'C';
}

export function setTempUnit(temp) {
    const activeLangs = document.querySelectorAll('.temperature_unit.active');
    if (activeLangs.length > 0) {
        document.querySelectorAll('.temperature_unit.active')[0].classList.remove('active');
    }

    document.querySelectorAll(`[data-temp="${temp}"]`)[0].classList.add('active');
    localStorage.setItem('temp', temp);
}
