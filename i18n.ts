import { TimeSlot, Program } from './types';
import { MAX_FILE_SIZE_MB, MAX_FILES } from './constants';

export const content = {
  th: {
    langName: 'ไทย',
    header: {
      schoolName: 'โรงเรียนสาธิตอุดมศึกษา',
      subTitle: 'Satit Udomseuksa School',
    },
    nav: {
      form: 'แบบยืนยันการเข้าร่วม',
    },
    announcement: {
      title: 'เรื่อง การจัดกิจกรรมวันแม่แห่งชาติ ประจำปี 2568',
      to: { label: 'เรียน', value: 'ผู้ปกครองนักเรียนระดับชั้นอนุบาล - ประถมศึกษาปีที่ 6' },
      p1: 'ด้วยในวันศุกร์ที่ 8 สิงหาคม 2568 โรงเรียนกำหนดจัดกิจกรรมวันแม่แห่งชาติ ประจำปี 2568 ณ ห้องประชุมชั้น 5 อาคารเพ็ชรตระกูล 2 โดยจัดเป็นกิจกรรมเฉลิมพระเกียรติสมเด็จพระนางเจ้าสิริกิติ์พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง และกิจกรรมรำลึกถึงพระคุณแม่ ของนักเรียนแต่ละระดับชั้นดังนี้',
      p2: null,
      p3: 'ในการนี้ขอเรียนเชิญคุณแม่มาร่วม “กิจกรรมรำลึกถึงพระคุณแม่” ร่วมกับนักเรียนแต่ละระดับชั้นตามวันและเวลาดังกล่าว ทั้งนี้ขอเชิญชวนผู้เข้าร่วมกิจกรรมแต่งกายสุภาพด้วยเสื้อผ้าชุดสีฟ้า',
      p4: 'อนึ่ง โรงเรียนปิดเรียนเป็นกรณีพิเศษและหยุดเนื่องในวันแม่แห่งชาติ 2 วัน คือวันจันทร์ที่ 11 และวันอังคารที่ 12 สิงหาคม 2568',
      p5: 'จึงเรียนมาเพื่อโปรดทราบ และตอบรับการเข้าร่วมกิจกรรมด้วยจักขอบคุณยิ่ง',
    },
    schedule: [
      { id: TimeSlot.KINDERGARTEN, label: 'ระดับชั้นอนุบาล Thai Programme & English Programme', time: '08.50 – 10.20 น.' },
      { id: TimeSlot.PRIMARY_EP, label: 'ระดับชั้นประถมศึกษา English Programme', time: '10.30 – 12.00 น.' },
      { id: TimeSlot.PRIMARY_TP, label: 'ระดับชั้นประถมศึกษา Thai Programme', time: '13.00 – 14.30 น.' },
    ],
    programs: [
        { id: Program.KINDERGARTEN, label: 'ระดับชั้นอนุบาล', grades: ['K.1A TP', 'K.1B TP', 'K.2A TP', 'K.3A TP', 'K.3B TP', 'K.1A EP', 'K.2A EP', 'K.3A EP', 'K.3B EP'] },
        { id: Program.THAI_PROGRAMME, label: 'Thai Programme', grades: ['ป.1A TP', 'ป.1B TP', 'ป.2A TP', 'ป.2B TP', 'ป.3A TP', 'ป.3B TP', 'ป.4A TP', 'ป.4B TP', 'ป.5A TP', 'ป.5B TP', 'ป.6A TP', 'ป.6B TP'] },
        { id: Program.ENGLISH_PROGRAMME, label: 'English Programme', grades: ['ป.1A EP', 'ป.1B EP', 'ป.2A EP', 'ป.2B EP', 'ป.3A EP', 'ป.3B EP', 'ป.4A EP', 'ป.4B EP', 'ป.5A EP', 'ป.5B EP', 'ป.6A EP', 'ป.6B EP'] },
    ],
    parentPrefixes: [
        { value: 'นาย', label: 'นาย' },
        { value: 'นาง', label: 'นาง' },
        { value: 'นางสาว', label: 'นางสาว' },
    ],
    studentPrefixes: [
        { value: 'ด.ช.', label: 'ด.ช.' },
        { value: 'ด.ญ.', label: 'ด.ญ.' },
        { value: 'นาย', label: 'นาย' },
        { value: 'นางสาว', label: 'นางสาว' },
    ],
    form: {
      title: 'แบบยืนยันการเข้าร่วมกิจกรรม',
      deadline: 'โปรดยืนยันการเข้าร่วมภายใน วันจันทร์ที่ 4 สิงหาคม 2568',
      parentNameSectionLabel: 'ข้อมูลผู้ปกครอง',
      studentNameSectionLabel: 'ข้อมูลนักเรียน',
      prefixLabel: 'คำนำหน้า',
      firstNameLabel: 'ชื่อ',
      middleNameLabel: 'ชื่อกลาง (ถ้ามี)',
      lastNameLabel: 'นามสกุล',
      prefixPlaceholder: 'เลือก',
      programLabel: 'โปรแกรมการเรียน',
      gradeLabel: 'ระดับชั้น / ห้องเรียน',
      gradePlaceholder: 'กรุณาเลือกโปรแกรมก่อน',
      phoneLabel: 'หมายเลขโทรศัพท์ (ถ้ามี)',
      phonePlaceholder: 'สำหรับติดต่อกลับ',
      attendanceLabel: 'ยืนยันการเข้าร่วม',
      required: '*',
      attendingBtn: 'เข้าร่วม',
      notAttendingBtn: 'ไม่สามารถเข้าร่วม',
      timeSlotLabel: 'ช่วงเวลาเข้าร่วมกิจกรรม',
      timeSlotPlaceholder: 'กรุณาเลือกโปรแกรมการเรียนเพื่อดูช่วงเวลา',
      accompanyingGuestsLabel: 'จำนวนผู้เข้าร่วม (รวมผู้ปกครอง)',
      accompanyingGuestsPlaceholder: 'ระบุจำนวน',
      photoUploadLabel: `แนบรูปถ่าย (สูงสุด ${MAX_FILES} รูป)`,
      uploadInstruction1: 'อัปโหลดไฟล์',
      uploadInstruction2: 'หรือลากและวาง',
      uploadHint: `PNG, JPG, JPEG สูงสุด ${MAX_FILE_SIZE_MB}MB`,
      submitBtn: 'ส่งข้อมูลยืนยัน',
      submittingBtn: 'กำลังส่งข้อมูล...',
    },
    checkAttendance: {
      title: 'ตรวจสอบรายชื่อผู้เข้าร่วม',
      programLabel: 'โปรแกรมการเรียน',
      programPlaceholder: 'เลือกโปรแกรม',
      gradeLabel: 'ระดับชั้น / ห้องเรียน',
      gradePlaceholder: 'เลือกห้องเรียน',
      searchBtn: 'ค้นหารายชื่อ',
      searchingBtn: 'กำลังค้นหา...',
      resultsTitle: 'รายชื่อผู้ยืนยันเข้าร่วม',
      noResults: 'ไม่พบข้อมูลผู้เข้าร่วมสำหรับห้องเรียนนี้',
      error: 'เกิดข้อผิดพลาดในการดึงข้อมูล โปรดลองอีกครั้ง',
      studentHeader: 'นักเรียน',
      parentHeader: 'ผู้ปกครอง',
      accompanyingGuestsHeader: 'จำนวนผู้เข้าร่วม',
    },
    alerts: {
      fileTooMany: { title: 'อัปโหลดไฟล์เกินจำนวน', text: `คุณสามารถอัปโหลดได้สูงสุด ${MAX_FILES} รูป` },
      fileUnsupported: { title: 'ไฟล์ประเภทที่ไม่รองรับ', text: 'โปรดเลือกไฟล์ .jpeg, .jpg, หรือ .png เท่านั้น' },
      fileTooLarge: { title: 'ไฟล์มีขนาดใหญ่เกินไป', text: `ขนาดไฟล์ต้องไม่เกิน ${MAX_FILE_SIZE_MB}MB` },
      formIncomplete: { title: 'ข้อมูลไม่ครบถ้วน', text: 'กรุณากรอกข้อมูลผู้ปกครองและนักเรียนในช่องที่มีเครื่องหมาย * ให้ครบถ้วน' },
      programUnselected: { title: 'โปรดเลือกโปรแกรม', text: 'กรุณาเลือกโปรแกรมการเรียนของนักเรียน' },
      gradeUnselected: { title: 'โปรดเลือกระดับชั้น', text: 'กรุณาเลือกระดับชั้นและห้องเรียนของนักเรียน' },
      attendanceUnselected: { title: 'โปรดเลือกการเข้าร่วม', text: 'กรุณายืนยันการเข้าร่วมกิจกรรม' },
      timeSlotUnselected: { title: 'โปรดเลือกช่วงเวลา', text: 'กรุณาเลือกช่วงเวลาที่ต้องการเข้าร่วม' },
      attendeesRequired: { title: 'ระบุจำนวนผู้เข้าร่วม', text: 'กรุณาระบุจำนวนผู้เข้าร่วมอย่างน้อย 1 คน (รวมผู้ปกครอง)' },
      configError: { title: 'ตั้งค่าระบบไม่ถูกต้อง', text: 'ยังไม่ได้กำหนดค่า URL ของ Backend Script โปรดติดต่อผู้ดูแลระบบ' },
      submitError: { title: 'เกิดข้อผิดพลาด', text: 'ไม่สามารถส่งข้อมูลได้ในขณะนี้ โปรดลองอีกครั้งในภายหลัง' },
      submitSuccess: {
        title: 'ส่งข้อมูลสำเร็จ!',
        html: `<p class="text-left text-gray-700">โรงเรียนได้รับข้อมูลการยืนยันของท่านเรียบร้อยแล้ว ขอบคุณครับ</p>`,
        confirmButtonText: 'ตกลง',
      },
    },
    welcomePopup: {
      title: 'ยินดีต้อนรับ / Welcome!',
      html: `
        <div class="text-left space-y-4 py-4">
          <p class="text-lg text-indigo-800 font-semibold">
            💙 กรุณาเตรียมรูปภาพของแม่และลูกที่น่ารักที่สุดจำนวน 2 รูป สำหรับอัปโหลดเข้าร่วมกิจกรรมวันแม่
          </p>
          <hr/>
          <p class="text-lg text-[#1A237E] font-semibold">
            💙 Please prepare the two best photos of mother and child to upload for the Mother's Day activity.
          </p>
        </div>
      `,
      confirmButtonText: 'รับทราบ / Understood',
    },
  },
  en: {
    langName: 'English',
    header: {
      schoolName: 'โรงเรียนสาธิตอุดมศึกษา',
      subTitle: 'Satit Udomseuksa School',
    },
    nav: {
      form: 'Confirmation Form',
    },
    announcement: {
      title: 'Mother’s Day Activity 2025',
      to: { label: 'To:', value: 'Parents and Guardians of Kindergarten to Primary 6 Students' },
      p1: 'On Friday, August 8, 2025, Satit Udomseuksa School will hold the National Mother’s Day Celebration at the school assembly hall, 5th floor, Phettrakul Building 2.',
      p2: 'The event will be held in honor of Her Majesty Queen Sirikit The Queen Mother and as a tribute to the immeasurable love and care of mothers. The activities will follow the schedule below:',
      p3: 'We would like to cordially invite all mothers to participate in the “Tribute to Mothers” activity with your child during the time slot assigned to each grade level. Kindly wear modest attire in blue to show respect and celebration of this special occasion.',
      p4: 'Please note that the school will be closed for two special holidays in observance of National Mother’s Day: Monday, August 11 and Tuesday, August 12, 2025.',
      p5: 'We sincerely hope you will be able to join us and kindly request your confirmation of attendance.',
    },
    schedule: [
      { id: TimeSlot.KINDERGARTEN, label: 'Kindergarten Thai Programme & English Programme', time: '08:50 – 10:20 am' },
      { id: TimeSlot.PRIMARY_EP, label: 'Primary English Programme', time: '10:30 – 12:00 am' },
      { id: TimeSlot.PRIMARY_TP, label: 'Primary Thai Programme', time: '13:00 – 14:30 pm' },
    ],
    programs: [
        { id: Program.KINDERGARTEN, label: 'Kindergarten', grades: ['K.1A TP', 'K.1B TP', 'K.2A TP', 'K.3A TP', 'K.3B TP', 'K.1A EP','K.2A EP','K.3A EP', 'K.3B EP'] },
        { id: Program.THAI_PROGRAMME, label: 'Thai Programme', grades: ['P.1A TP', 'P.1B TP', 'P.2A TP', 'P.2B TP', 'P.3A TP', 'P.3B TP', 'P.4A TP', 'P.4B TP', 'P.5A TP', 'P.5B TP', 'P.6A TP', 'P.6B TP'] },
        { id: Program.ENGLISH_PROGRAMME, label: 'English Programme', grades: ['P.1A EP', 'P.1B EP', 'P.2A EP', 'P.2B EP', 'P.3A EP', 'P.3B EP', 'P.4A EP', 'P.4B EP', 'P.5A EP', 'P.5B EP', 'P.6A EP', 'P.6B EP'] },
    ],
    parentPrefixes: [
        { value: 'Mr.', label: 'Mr.' },
        { value: 'Mrs.', label: 'Mrs.' },
        { value: 'Ms.', label: 'Ms.' },
    ],
    studentPrefixes: [
        { value: 'Master', label: 'Master' },
        { value: 'Miss', 'label': 'Miss' },
        { value: 'Mr.', label: 'Mr.' },
        { value: 'Ms.', label: 'Ms.' },
    ],
    form: {
      title: 'Attendance Confirmation Form',
      deadline: 'Please confirm your attendance by Monday, August 4, 2025',
      parentNameSectionLabel: "Parent's Information",
      studentNameSectionLabel: "Student's Information",
      prefixLabel: 'Prefix',
      firstNameLabel: 'First Name',
      middleNameLabel: 'Middle Name (Optional)',
      lastNameLabel: 'Last Name',
      prefixPlaceholder: 'Select',
      programLabel: 'Program',
      gradeLabel: 'Grade / Classroom',
      gradePlaceholder: 'Please select a program first',
      phoneLabel: 'Phone Number (Optional)',
      phonePlaceholder: 'For contact purposes',
      attendanceLabel: 'Confirmation of Attendance',
      required: '*',
      attendingBtn: 'Attending',
      notAttendingBtn: 'Not Attending',
      timeSlotLabel: 'Activity Time Slot',
      timeSlotPlaceholder: 'Please select a program to view the time slot',
      accompanyingGuestsLabel: 'Number of Attendees (incl. parent)',
      accompanyingGuestsPlaceholder: 'Enter number',
      photoUploadLabel: `Photo Upload (Max ${MAX_FILES})`,
      uploadInstruction1: 'Upload a file',
      uploadInstruction2: 'or drag and drop',
      uploadHint: `PNG, JPG, JPEG up to ${MAX_FILE_SIZE_MB}MB`,
      submitBtn: 'Submit Confirmation',
      submittingBtn: 'Submitting...',
    },
    checkAttendance: {
      title: 'Check Attendance List',
      programLabel: 'Program',
      programPlaceholder: 'Select Program',
      gradeLabel: 'Grade / Classroom',
      gradePlaceholder: 'Select Classroom',
      searchBtn: 'Search List',
      searchingBtn: 'Searching...',
      resultsTitle: 'Confirmed Attendees',
      noResults: 'No attendees found for this classroom.',
      error: 'An error occurred while fetching data. Please try again.',
      studentHeader: 'Student',
      parentHeader: 'Parent',
      accompanyingGuestsHeader: 'Attendees',
    },
    alerts: {
      fileTooMany: { title: 'Too Many Files', text: `You can upload a maximum of ${MAX_FILES} photos.` },
      fileUnsupported: { title: 'Unsupported File Type', text: 'Please select only .jpeg, .jpg, or .png files.' },
      fileTooLarge: { title: 'File Too Large', text: `File size must not exceed ${MAX_FILE_SIZE_MB}MB.` },
      formIncomplete: { title: 'Incomplete Information', text: 'Please fill out all required fields (*) for parent and student information.' },
      programUnselected: { title: 'Please Select Program', text: "Please select the student's program." },
      gradeUnselected: { title: 'Please Select Grade', text: "Please select the student's grade and classroom." },
      attendanceUnselected: { title: 'Please Confirm Attendance', text: 'Please select whether you will be attending or not.' },
      timeSlotUnselected: { title: 'Please Select Time Slot', text: 'Please select a time slot to attend.' },
      attendeesRequired: { title: 'Number of Attendees Required', text: 'Please enter at least 1 attendee (including the parent).' },
      configError: { title: 'System Configuration Error', text: 'The backend script URL is not configured. Please contact the administrator.'},
      submitError: { title: 'Submission Error', text: 'Could not submit the form at this time. Please try again later.' },
      submitSuccess: {
        title: 'Submission Successful!',
        html: `<p class="text-left text-gray-700">The school has received your attendance confirmation. Thank you.</p>`,
        confirmButtonText: 'OK',
      },
    },
    welcomePopup: {
      title: 'Welcome! / ยินดีต้อนรับ',
      html: `
        <div class="text-left space-y-4 py-4">
          <p class="text-lg text-[#1A237E] font-semibold">
            💙 Please prepare the two best photos of mother and child to upload for the Mother's Day activity.
          </p>
          <hr/>
          <p class="text-lg text-indigo-800 font-semibold">
            💙 กรุณาเตรียมรูปภาพของแม่และลูกที่น่ารักที่สุดจำนวน 2 รูป สำหรับอัปโหลดเข้าร่วมกิจกรรมวันแม่
          </p>
        </div>
      `,
      confirmButtonText: 'Understood / รับทราบ',
    },
  },
};
