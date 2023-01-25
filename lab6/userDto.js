class UserDto {
  picture = "";
  name = "";
  country = "";
  postcode = 0;
  city = "";
  phone = "";
  constructor(inputData) {
    this.picture = inputData.picture;
    this.name = inputData.name;
    this.country = inputData.country;
    this.postcode = inputData.postcode;
    this.city = inputData.city;
    this.phone = inputData.phone;
  }
}