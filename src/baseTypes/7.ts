/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekends {
  SATURDAY,
  SUNDAY
}

const isWeekend = (weekDay): boolean => {
  if (weekDay === Weekends.weekDay) {
    return true;
  }
  return false
}