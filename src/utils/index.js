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
