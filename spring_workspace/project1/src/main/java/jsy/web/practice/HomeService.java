package jsy.web.practice;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;

@Service
public class HomeService {
	
	public void callGetApi() {
        // Node.js GET API 서버의 URL
        String apiUrl = "http://localhost:3000/api/get/map-api";

        // RestTemplate 생성
        RestTemplate restTemplate = new RestTemplate();

        // GET 요청 예제
        ResponseEntity<String> getResponse = restTemplate.getForEntity(apiUrl, String.class);
        System.out.println("GET Response: " + getResponse.getBody());

    }
	
	public void callPostApi() {
		// Node.js POST API 서버의 URL
		String apiUrl = "http://localhost:3000/api/post/map-api";
		
		// RestTemplate 생성
		RestTemplate restTemplate = new RestTemplate();
		
		
		// POST 요청 예제
		ResponseEntity<String> postResponse = restTemplate.postForEntity(apiUrl, null, String.class);
		System.out.println("POST Response: " + postResponse.getBody());
	}

}
