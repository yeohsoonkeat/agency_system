class Authentication{
	async login(email,password){
		console.log('login', email, password)
	}
	async logout(){
		console.log('logout')
	}   
	
}

export default new Authentication()