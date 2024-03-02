export const handleErrors = (code) => {
  if (!code) {
    return {
      status: 500,
      message: "Server error, unknown code",
    };
  }

  switch (code) {
    case "22P02":
      return {
        status: 400,
        message: "Invalid format in the parameter: Only numbers are accepted",
      };
    case "28P01":
      return {
        status: 400,
        message: "Incorrect postgres password",
      };
    case "3D000":
      return {
        status: 400,
        message: "Database does not exist",
      };
    case "ECONNREFUSED":
      return {
        status: 400,
        message: "Failed to connect to the database",
      };
    case "401":
      return {
        status: 404,
        message: "Bearer format token required",
      };
    case "402":
      return {
        status: 404,
        message: "You must complete all fields: email, password, rol, language"
      };
    case "403":
      return {
        status: 404,
        message: "You must complete all fields: email, password"
      };
    case "404":
      return {
        status: 404,
        message: "User does not exist"
      };
      case "405":
        return {
          status: 404,
          message: "Incorrect password"
        };
      
    default:
      return {
        status: 500,
        message: "Internal Server Error"
      };
  }
};
