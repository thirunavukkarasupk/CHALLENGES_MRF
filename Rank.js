const { map,reduce,values,keys } = require("@laufire/utils/collection");

const markSheets= [
{
    student: 'Sriram',
    rollNo: 11,
},
{
    student: 'Ram',
    rollNo: 16,    
},
{
    student: 'sri',
    rollNo: 18,
},
{
    student: 'mani',
    rollNo: 20,
}
];
const marks={
  11: {
    tamil: 80,
    english: 90,
    science: 86,
    maths: 97,
    social: 76,
    economics:82
  },
  16: { 
    tamil: 90,
    english: 97,
    science: 100,
    maths: 34,
    social: 96,
    economics:82
  },
  18: {
    tamil: 60,
    english: 90,
    science: 63,
    maths: 93,
    social: 46,
    economics:82
  },
  20: {
    tamil: 79,
    english: 80,
    science: 91,
    maths: 93,
    social: 86,
    economics:82
  }
}

const getStudentDetails=(student)=>{
  const name =student.student;
  const rollNumber=student.rollNo;
  const mark=marks[student.rollNo];
  const total = reduce(marks[student.rollNo],(total,mark)=>total+mark,0);
  const result=(reduce(marks[student.rollNo],(minMark,mark)=>
  mark<minMark?minMark=mark:minMark=(0||minMark),100))<35  ? "FAIL" : "PASS"
  return {name,rollNumber,...mark,total,result};
  }
const getRank=()=>{
  const studentDetails=map(markSheets,getStudentDetails).sort((a,b)=>b.total-a.total)
  let rank=0;
  const updatedStudentDetails=map(studentDetails,(student)=>{
  student.rank=(student.result)==="FAIL" 
                                ? "-" 
                                : ++rank
  return student;
  })
  return updatedStudentDetails;
}
const getCount = () => {
  const updatedStudentDetails=getRank();
  const finalStudentDetails=[...updatedStudentDetails,reduce(updatedStudentDetails,(count,student)=>{
                                      student.result==="PASS"
                                      ?{PASS:++count.PASS}
                                      :{FAIL:++count.FAIL}
                                      return count},
                                      {PASS:0,FAIL:0})]
  return finalStudentDetails; 
}
const main =()=>{
  console.table(getCount());
}
main()



