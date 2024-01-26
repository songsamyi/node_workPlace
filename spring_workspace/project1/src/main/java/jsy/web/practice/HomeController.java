package jsy.web.practice;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class HomeController {
	
	@Autowired
	private HomeService homeService;
	

	@RequestMapping("/")
	public String home(Locale locale, Model model) {
		return "home";
	}
	
	// get방식은 url치면 콘솔에 결과 나옴
	// nodeJs api호출
    @GetMapping("/call-get-api")
    public String callGetApi() {
    	homeService.callGetApi();
        return "Get API call initiated";
    }
    
    
    // post방식 url치면 콘솔에 결과 나옴
    // nodeJs api호출
    @PostMapping("/call-post-api")
    public String callPostApi() {
    	homeService.callPostApi();
    	return "Post API call initiated";
    }
	
	
}
