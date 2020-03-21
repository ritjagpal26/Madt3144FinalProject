class HotelBooking {
  constructor(name,room,adults,children,checkindate,checkoutdate,userId) {
    this.name = name;
    this.room = room;
     this.adults = adults;
     this.children = children;
     this.checkIn = checkindate;
     this.checkOut = checkoutdate;
     this.userID = userId;
  }
}
class  User {
  constructor(fname,lname,password,email,username) {
    this.fname = fname;
    this.lname = lname;
    this.password = password;
    this.email = email;
    this.username = username;
  }
}
class FlightBooking{
  constructor(type,flightId,departing, returning,adults, children, travelClass,userId){
    this.type = type;
    this.flight = flightId;
    this.departing = departing;
    this.returning = returning;
    this.adults = adults;
    this.children = children;
    this.travelClass = travelClass;
    this.userID = userId;
  }
}

class FlightDetails{
  constructor(flyingFrom, flyingTo, flightname,fare,departuretime,arrivaltime){

    this.flyingFrom = flyingFrom;
    this.flyingTo = flyingTo;
    this.fare = fare;
    this.departuretime = departuretime;
    this.arrivaltime = arrivaltime;
    this.flightname=flightname;

  }
}
