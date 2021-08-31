// แบบฝึกหัด 3 Body Mass Index (BMI) Calculator Program

function BMI(weight, w_measurement_units, height, h_measurement_units) { // ฟังก์ชั่นที่ใช้คำนวณค่า BMI โดยจะรับค่า น้ำหนัก , หน่วยวัดของน้ำหนัก , ความสูง , หน่วยวัดของความสูง

    const POUND2KILOGRAM = 0.453592; // กำหนดค่า 1 pound = 0.453592 kilogram
    const INCH2METER = 0.0254; // กำหนดค่า 1 inch = 0.0254 meter
    const METER2CM = 100; // กำหนดค่า 1 meter = 100 cm

    if (h_measurement_units.toLowerCase() == 'inch') {
        height = height * INCH2METER; // ถ้ารับหน่วยค่าความสูงมาเป็น inch ก็แปลงเป็น meter
    } else if (h_measurement_units.toLowerCase() == 'meter') {
        // ไม่ต้องทำอะไรเพราะรับหน่วยค่าความสูงมาเป็น meter
    } else if (h_measurement_units.toLowerCase() == 'centimeter') {
        height = height / METER2CM; // ถ้ารับหน่วยค่าความสูงมาเป็น centimeter ก็แปลงเป็น meter
    }

    if (w_measurement_units.toLowerCase() == 'pound') {
        weight = weight * POUND2KILOGRAM; // ถ้ารับค่าน้ำหนักมาเป็น pound ก็แปลงเป็น kilogram
    } else if (w_measurement_units.toLowerCase() == 'kilogram') {
        // ไม่ต้องทำอะไรเพราะหน่วยที่รับมาเป็น kilogram
    }

    bmi_result = weight / (height ** 2); // คำนวณค่า BMI โดยใช้สูตร kg/m^2
    bmi_result_text = 'Unknown'; // กำหนดสถานะเป็น Unknown (ไม่รู้)

    if (bmi_result < 18.5) { // ถ้า bmi_result น้อยกว่า 18.5 ก็อยู่ในเกณท์ Underweight
        bmi_result_text = 'Underweight';
    } else if (bmi_result >= 18.6 && bmi_result <= 24.9) { // ถ้า bmi_result มากกว่าหรือเท่ากับ 18.6 และไม่เกิน 24.9 ก็อยู่ในเกณท์ Normal
        bmi_result_text = 'Normal';
    } else if (bmi_result >= 25.0 && bmi_result <= 29.9) { // ถ้า bmi_result มากกว่าหรือเท่ากับ 25.0 และไม่เกิน 29.9 ก็อยู่ในเกณท์ Overweight
        bmi_result_text = 'Overweight';
    } else { // ถ้า bmi_result มากกว่า 29.9 ขึ้นไป ก็อยู่ในเกณท์ Obesity
        bmi_result_text = 'Obesity';
    }

    return `Your BMI : ${bmi_result} || Be in line for : ${bmi_result_text}` // return ผลลัพธ์ทั้งหมดออกมาเป็น Your BMI : ${เลขผลลัพธ์ BMI ที่คำนวณ} || Be in line for : ${ผลลัพธ์ของเกณท์}

}

// Test ฟังก์ชั่น BMI
console.log(BMI(59, 'kilogram', 1.77, 'meter'));
console.log(BMI(130, 'kilogram', 80, 'inch'));
console.log(BMI(36.5, 'pound', 39, 'inch'));
console.log(BMI(130, 'pound', 1.77, 'meter'));
