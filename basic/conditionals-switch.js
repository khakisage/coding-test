const printDay = (day) => {
  let weekend = '';

  switch (day) {
    case 1:
      weekend = 'Monday';
      break;
    case 2:
      weekend = 'Tuseday';
      break;
    case 3:
      weekend = 'Wednesday';
      break;
    case 4:
      weekend = 'Thursday';
      break;
    case 5:
      weekend = 'Friday';
      break;
    case 6:
      weekend = 'Saturday';
      break;
    case 7:
      weekend = 'Sunday';
      break;
    default:
      weekend = 'Invalid day';
  }

  console.log(weekend);
};

printDay(2);
