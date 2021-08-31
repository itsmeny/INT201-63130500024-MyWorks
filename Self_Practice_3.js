// แบบฝึกหัด 1 เขียนโปรแกรมเพื่อแสดงราศีที่ตรงกับปีที่กำหนดไว้ โดยมีทั้งหมด 12 ราศี ซึ่งแทนโดยสัตว์ประเภทต่างๆ ตัวอย่างเช่น ปี 1900 % 12 จะมีค่า 4 ซึ่งจะแทนด้วยราศีหนู
//แบบ function switch
function get_zodiac_switch(year) {
    switch (year % 12) {
        case 0: return 'monkey';
            break;
        case 1: return 'rooster';
            break;
        case 2: return 'dog';
            break;
        case 3: return 'pig';
            break;
        case 4: return 'rat';
            break;
        case 5: return 'ox';
            break;
        case 6: return 'tiger';
            break;
        case 7: return 'rabbit';
            break;
        case 8: return 'dragon';
            break;
        case 9: return 'snake';
            break;
        case 10: return 'horse';
            break;
        case 11: return 'sheep';
            break;
        default:
            break;
    }
}
//แบบ function ที่อ้างถึง index ของ array
function get_zodiac_array(year) {
    const zodiac = ['monkey', 'rooster', 'dog', 'pig', 'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'sheep'];
    return zodiac[year % 12];
}

console.log(get_zodiac_array(2002)); // เรียกใช้ function
console.log(get_zodiac_switch(2002)); // เรียกใช้ function