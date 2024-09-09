let taskFull = "কাজের চাপ বেশি হয়ে গেছে.😢";
let practiceNai =
  "কাজের লোড নিতে গিয়ে প্র্যাকটিস প্রোগ্রামীং করা হচ্ছে না ..😒";
let hangSob = "মাথাই নাকি নষ্ট হয়ে গেল...";

let result =
  taskFull.length > practiceNai.length && taskFull.length > hangSob.length
    ? taskFull
    : taskFull.length < practiceNai.length && taskFull.length < hangSob.length
    ? taskFull
    : practiceNai.length > hangSob.length
    ? practiceNai
    : hangSob;

console.log(result);

//output
কাজের লোড নিতে গিয়ে প্র্যাকটিস প্রোগ্রামীং করা হচ্ছে না ..😒