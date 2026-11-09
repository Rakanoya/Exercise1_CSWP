let sample0 = [
  {d1: "A", d2: "B", d3: "C"},
  {d1: "D", d2: "E", d3: "F"},
  {d1: "G", d2: "H", d3: "I"}
];

let myPropsS0 = {
  caption: "My Caption",
  headers: ["Heading 1","Heading 2","Heading 3"],
  data: sample0 
};

let sample1 = [
  {headers:["XXXXX","YYYYY","ZZZZZ"]},
  {d1: "A", d2: "B", d3: "C"},
  {d1: "D", d2: "E", d3: "F"},
  {d1: "G", d2: "H", d3: "I"}
];

let myPropsS1 = {
  caption : "My Caption",
  useDataHeading: true,
  data: sample1  
};

let people0 = [
  {
    "first_name": "Emma",
    "last_name": "Johnson",
    "birth_date": "1992-03-14",
    "address": "125 Maple Street, Denver, CO 80205"
  },
  {
    "first_name": "Liam",
    "last_name": "Williams",
    "birth_date": "1988-07-23",
    "address": "482 Pine Avenue, Seattle, WA 98101"
  },
  {
    "first_name": "Olivia",
    "last_name": "Brown",
    "birth_date": "1995-11-09",
    "address": "78 Oak Lane, Austin, TX 78702"
  },
  {
    "first_name": "Noah",
    "last_name": "Jones",
    "birth_date": "1990-02-17",
    "address": "301 Cedar Road, Boston, MA 02118"
  },
  {
    "first_name": "Ava",
    "last_name": "Garcia",
    "birth_date": "1998-06-28",
    "address": "64 Birch Boulevard, Miami, FL 33133"
  },
  {
    "first_name": "Elijah",
    "last_name": "Miller",
    "birth_date": "1985-09-12",
    "address": "210 Willow Street, Chicago, IL 60614"
  },
  {
    "first_name": "Sophia",
    "last_name": "Davis",
    "birth_date": "1993-12-04",
    "address": "89 Spruce Drive, Portland, OR 97209"
  },
  {
    "first_name": "James",
    "last_name": "Martinez",
    "birth_date": "1989-05-20",
    "address": "37 Aspen Way, San Diego, CA 92103"
  },
  {
    "first_name": "Isabella",
    "last_name": "Hernandez",
    "birth_date": "1997-08-16",
    "address": "412 Chestnut Street, Atlanta, GA 30308"
  },
  {
    "first_name": "Benjamin",
    "last_name": "Lopez",
    "birth_date": "1991-01-31",
    "address": "154 Redwood Avenue, New York, NY 10027"
  }
];

let myPropsP0 = {
  caption : "People",
  headers : ["First","Last","Birthday","Address"],
  data: people0,  
};


let people1 = [
  {
    headers:["First","Last","Birthday","Address"]
  },
  {
    "first_name": "Emma",
    "last_name": "Johnson",
    "birth_date": "1992-03-14",
    "address": "125 Maple Street, Denver, CO 80205"
  },
  {
    "first_name": "Liam",
    "last_name": "Williams",
    "birth_date": "1988-07-23",
    "address": "482 Pine Avenue, Seattle, WA 98101"
  },
  {
    "first_name": "Olivia",
    "last_name": "Brown",
    "birth_date": "1995-11-09",
    "address": "78 Oak Lane, Austin, TX 78702"
  },
  {
    "first_name": "Noah",
    "last_name": "Jones",
    "birth_date": "1990-02-17",
    "address": "301 Cedar Road, Boston, MA 02118"
  },
  {
    "first_name": "Ava",
    "last_name": "Garcia",
    "birth_date": "1998-06-28",
    "address": "64 Birch Boulevard, Miami, FL 33133"
  },
  {
    "first_name": "Elijah",
    "last_name": "Miller",
    "birth_date": "1985-09-12",
    "address": "210 Willow Street, Chicago, IL 60614"
  },
  {
    "first_name": "Sophia",
    "last_name": "Davis",
    "birth_date": "1993-12-04",
    "address": "89 Spruce Drive, Portland, OR 97209"
  },
  {
    "first_name": "James",
    "last_name": "Martinez",
    "birth_date": "1989-05-20",
    "address": "37 Aspen Way, San Diego, CA 92103"
  },
  {
    "first_name": "Isabella",
    "last_name": "Hernandez",
    "birth_date": "1997-08-16",
    "address": "412 Chestnut Street, Atlanta, GA 30308"
  },
  {
    "first_name": "Benjamin",
    "last_name": "Lopez",
    "birth_date": "1991-01-31",
    "address": "154 Redwood Avenue, New York, NY 10027"
  }
];
let myPropsP1 = {
  useDataHeading: true,
  caption : "People",
  data: people1
};

let weather = [
  {
    "city": "Charlotte",
    "date": "2025-11-12",
    "temperature_fahrenheit": 57.2,
    "humidity_percent": 68,
    "wind_speed_mph": 10,
    "wind_direction": "SW",
    "condition": "Partly Cloudy",
    "precipitation_in": 0.00
  },
  {
    "city": "Raleigh",
    "date": "2025-11-12",
    "temperature_fahrenheit": 52.7,
    "humidity_percent": 70,
    "wind_speed_mph": 7,
    "wind_direction": "W",
    "condition": "Overcast",
    "precipitation_in": 0.05
  },
  {
    "city": "Asheville",
    "date": "2025-11-12",
    "temperature_fahrenheit": 46.9,
    "humidity_percent": 60,
    "wind_speed_mph": 12,
    "wind_direction": "NW",
    "condition": "Clear",
    "precipitation_in": 0.00
  },
  {
    "city": "Wilmington",
    "date": "2025-11-12",
    "temperature_fahrenheit": 62.6,
    "humidity_percent": 76,
    "wind_speed_mph": 9,
    "wind_direction": "SE",
    "condition": "Rain",
    "precipitation_in": 0.14
  },
  {
    "city": "Greensboro",
    "date": "2025-11-12",
    "temperature_fahrenheit": 50.0,
    "humidity_percent": 65,
    "wind_speed_mph": 9,
    "wind_direction": "SW",
    "condition": "Cloudy",
    "precipitation_in": 0.03
  },
  {
    "city": "Durham",
    "date": "2025-11-12",
    "temperature_fahrenheit": 54.1,
    "humidity_percent": 69,
    "wind_speed_mph": 6,
    "wind_direction": "W",
    "condition": "Mostly Cloudy",
    "precipitation_in": 0.02
  },
  {
    "city": "Fayetteville",
    "date": "2025-11-12",
    "temperature_fahrenheit": 59.4,
    "humidity_percent": 72,
    "wind_speed_mph": 8,
    "wind_direction": "SSW",
    "condition": "Partly Cloudy",
    "precipitation_in": 0.00
  }
];

let myPropsW = {
  headers : [
    "City",
    "Date",
    "Temp (F)",
    "Humidity (%)",
    "Wind Speed (mph)",
    "Wind Direction",
    "Condition",
    "Precipitation (in)"
    ],
  data: weather
};





let music = [
  {
    "rank": 1,
    "artist": "Taylor Swift",
    "album": "The Life of a Showgirl"
  },
  {
    "rank": 2,
    "artist": "G Herbo",
    "album": "Lil Herb"
  },
  {
    "rank": 3,
    "artist": "KPop Demon Hunters Cast, HUNTR/X & Saja Boys",
    "album": "KPop Demon Hunters (Soundtrack from the Netflix Film)"
  },
  {
    "rank": 4,
    "artist": "ROSALÍA",
    "album": "LUX"
  },
  {
    "rank": 5,
    "artist": "Morgan Wallen",
    "album": "I’m the Problem"
  },
  {
    "rank": 6,
    "artist": "Cardi B",
    "album": "AM I THE DRAMA? (Album Release Live Edition)"
  },
  {
    "rank": 7,
    "artist": "Olivia Dean",
    "album": "The Art of Loving"
  },
  {
    "rank": 8,
    "artist": "Sabrina Carpenter",
    "album": "Man’s Best Friend"
  },
  {
    "rank": 9,
    "artist": "Kodak Black",
    "album": "Just Getting Started"
  },
  {
    "rank": 10,
    "artist": "YoungBoy Never Broke Again",
    "album": "MASA"
  }
];

let myPropsM = {
  data: music
};