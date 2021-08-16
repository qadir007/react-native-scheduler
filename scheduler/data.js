const data = [
  {
    id: 1,
    username: "Sami",
    image: require("./user.jpg"),
    appointments: [
      {
        id: 1,
        start: new Date("2021-08-15T05:09:00.000Z"),
        end: new Date("2021-08-15T15:09:00.000Z"),
        username: "Karim",
        title: "teach him react natie",
        image: require("./user.jpg"),
      },
      {
        id: 2,
        start: new Date("2021-08-16T03:09:00.000Z"),
        end: new Date("2021-08-16T07:09:00.000Z"),
        username: "Kamal",
        title: "play game with him",
        image: require("./user.jpg"),
      },
      {
        id: 3,
        start: new Date("2021-08-17T02:09:00.000Z"),
        end: new Date("2021-08-17T04:09:00.000Z"),
        username: "Kamal",
        title: "play game with him",
        image: require("./user.jpg"),
      },
      {
        id: 4,
        start: new Date("2021-08-18T01:19:00.000Z"),
        end: new Date("2021-08-18T04:09:00.000Z"),
        username: "Kamal",
        title: "play game with him",
        image: require("./user.jpg"),
      },
    ],
  },
  {
    id: 2,
    username: "Wow",
    image: require("./user.jpg"),
    appointments: [
      {
        id: 1,
        start: new Date("2021-08-14T01:09:00.000Z"),
        end: new Date("2021-08-14T05:09:00.000Z"),
        username: "Karim",
        title: "teach him react natie",
        image: require("./user.jpg"),
      },
      {
        id: 2,
        start: new Date("2021-08-16T06:09:00.000Z"),
        end: new Date("2021-08-16T07:15:00.000Z"),
        username: "Kamel",
        title: "play game with him",
        image: require("./user.jpg"),
      },
      {
        id: 3,
        start: new Date("2021-08-16T08:09:00.000Z"),
        end: new Date("2021-08-16T10:15:00.000Z"),
        username: "Wow",
        title: "play game with him",
        image: require("./user.jpg"),
      },
      {
        id: 4,
        start: new Date("2021-08-16T11:09:00.000Z"),
        end: new Date("2021-08-16T13:15:00.000Z"),
        username: "Sami",
        title: "play game with him",
        image: require("./user.jpg"),
      },
    ],
  },
];

const getSelectedDateData = (date) => {
  console.log(date.toISOString().split("T")[0]);

  const selectedDateDate = data.map((user) => {
    return {
      ...user,
      appointments: user.appointments.filter(
        (appointment) =>
          appointment.start.toISOString().split("T")[0] ===
          date.toISOString().split("T")[0]
      ),
    };
  });
  return selectedDateDate;
};

const getNextDate = (oldDate) => {
  let day = oldDate.getDate() + 1;
  oldDate.setDate(day);
  console.log("new Date: " + oldDate);
  return oldDate;
};

const getPrevDate = (oldDate) => {
  let day = oldDate.getDate() - 1;
  oldDate.setDate(day);
  console.log("old date ", oldDate);
  return oldDate;
};

const getDayOfDate = (date) => {
  return date.getDate();
};

const getDayOfDateInString = (date) => {
  console.log("day name ", date.toString().split(" ")[0]);
  return date.toString().split(" ")[0];
};

export {
  data,
  getSelectedDateData,
  getNextDate,
  getPrevDate,
  getDayOfDate,
  getDayOfDateInString,
};
