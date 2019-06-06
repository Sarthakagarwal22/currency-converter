import axios from 'axios';

export async function getRequest(url:string) : Promise<any> {
	const instance = axios.create({
	  headers: {'Content-Type': 'application/json' }
	});

	try{
		const response = await instance.get(url);
		const response_data = await response.data;
	    return(response_data);
	}
	catch(error)
	{
		return error.message
	}	
}