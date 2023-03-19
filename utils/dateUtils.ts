/**
 * Get age from date string
 * @param {string} dateString - Date string
 * @returns {number} - Age
 * @example
 * const age = getAge('1990-01-01');
 */
export const getAge = (dateString: string): number => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}