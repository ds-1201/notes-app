export const generateID = (size = 10) => {
  return Math.floor(
    Math.pow(10, size - 1) + Math.random() * Math.pow(10, size - 1)
  );
};

export const generateInitials = (title) => {
  return title
    .split(" ")
    .map(function (str) {
      return str ? str[0].toUpperCase() : "";
    })
    .join("")
    .slice(0, 2);
};

export const limitCharLength = (title, size = 25) => {
  return title?.length > size ? title.slice(0, size) + "..." : title;
};

export const getDateAndTime = () => {
  const time = new Date().toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  let date = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const [month, day, year] = date.split("/");
  date = `${day}-${month}-${year}`;

  return { date, time };
};
