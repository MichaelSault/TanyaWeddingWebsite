const loginUser = async(userCredentials) => {
    console.log(userCredentials);

    try {
        let pool = await sql.connect(config);
        console.log(userCredentials);
        let returnedUser = await pool.request().query(`SELECT * FROM Runners WHERE Email = '${userCredentials.Email}' AND Password = '${userCredentials.Password}'`);
        console.log("Returned User Email ", returnedUser.recordset[0].Email);
        console.log("Returned User Password ", returnedUser.recordset[0].Password);

        return returnedUser;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {
    loginUser
}