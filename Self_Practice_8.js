// แบบฝึกหัดที่ 4 ให้เขียนโปรแกรมเพื่อทำเมนูจัดการ Text String ให้ทดสอบโดยใช้ String อย่างน้อย 3 กรณีที่แตกต่างกัน

textja = "Hello World"; // ข้อความที่เราต้องการจะใช้ในการเทส

function text_menu(menu) { // function เมนู โดยใช้ switch case 1 , 2 , 3 ตามโจทย์
    switch (menu) {
        case 1: return reverseText(textja); // Case 1 เรียกฟังก์ชั่น reverseText() โดยส่ง textja เข้าไป
        case 2: return vowelsReplace(textja); // Case 2 เรียกฟังก์ชั่น vowelsReplace() โดยส่ง textja เข้าไป
        case 3: return vowelsCount(textja); // Case 3 เรียกฟังก์ชั่น vowelsCount() โดยส่ง textja เข้าไป
        default: // case default
            break;
    }
}

function reverseText(text) { // function กลับตัวหนังสือจากหน้าไปหลัง โดยใช้ for loop
    let reversedText = ''; // สร้างตัวแปรชั่วคราวไว้เก็บตัวข้อความที่จะ reverse
    for (let i = text.length; i >= 0; i--) { // for loop ตั้งแต่ text.length ลบไปจนถึง 0 
        reversedText += text.charAt(i); // เอาตัว text.charAt(i) ไปเก็บไว้ใน reversedText
    }
    return reversedText; // return reversedText ออกไป
}

function vowelsReplace(text) { // function เปลี่ยน vowels ให้เป็น * โดยใช้ for loop , split
    const vowels = ['a', 'e', 'i', 'o', 'u']; // กำหนด array ของ vowels ที่จะใช้เช็ค
    let replacedText = text.split(''); // สร้างตัวแปร replacedText ไว้เก็บตัวหนังสือใน text ที่ split เป็น array
    for (let i = 0; i < replacedText.length; i++) { // for loop เช็คทุกตัวใน replacedText
        for (let j = 0; j < vowels.length; j++) { // for loop เช็ค vowels ว่ามี replacedText index ไหนมันมีค่าตรงกับ vowels 
            if (replacedText[i] == vowels[j]) { // ถ้า replacedText index ที่ไหนมันไปตรงกับ vowels ก็เปลี่ยนตำแหน่งนั้นให้เป็น *
                replacedText[i] = '*';
            }
        }
    }
    return replacedText.join(""); // return replacedText ออกไปแบบ string โดยใช้ join("")
}

function vowelsCount(text) { // function นับ vowels โดยใช้ for loop
    const vowels = ['a', 'e', 'i', 'o', 'u']; // กำหนด array ของ vowels ที่จะใช้เช็ค
    let count = 0; // สร้างตัวแปร count ไว้เก็บจำนวน
    for (let i = 0; i < text.length; i++) { // for loop เช็คทุกตัวใน text
        for (let j = 0; j < vowels.length; j++) { // for loop เช็ค vowels ว่ามี replacedText index ไหนมันมีค่าตรงกับ vowels 
            if (text.toLowerCase().charAt(i) == vowels[j]) { // ถ้ามี text index นั้นๆ ตรงกันกับ vowels ก็ count++;
                count++;
            }
        }
    }
    return count; // return จำนวน count ออกไป
}

console.log(text_menu(1)); // เรียกใช้ menu ที่ 1
console.log(text_menu(2)); // เรียกใช้ menu ที่ 2
console.log(text_menu(3)); // เรียกใช้ menu ที่ 3