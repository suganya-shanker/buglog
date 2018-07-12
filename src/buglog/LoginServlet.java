package buglog;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.net.URLConnection;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.repackaged.com.google.gson.Gson;
import com.google.appengine.repackaged.com.google.gson.JsonObject;
import com.google.appengine.repackaged.com.google.gson.JsonParser;


public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public LoginServlet() {
        super();
        
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response) throws ServletException, IOException {
    	/* response.setContentType("text/plain");

    	    response.getWriter().println("From servlet");*/

        System.out.println("entering doGet");
        try {
            // get code
            String code = request.getParameter("code");
            // format parameters to post
            String urlParameters = "code="
                    + code
                    + "&client_id=243752961514-4c76h99ijqtd8418ml8iin76t5ohsqo3.apps.googleusercontent.com"
                    + "&client_secret=U8fG1JPp9ZpcL652ijUIwWN6"
                    + "&redirect_uri=http://1-dot-inbound-hawk-191607.appspot.com/OAuth2CallBack"
                    + "&grant_type=authorization_code";
            
            //post parameters
            URL url = new URL("https://accounts.google.com/o/oauth2/token");
            URLConnection urlConn = url.openConnection();
            urlConn.setDoOutput(true);
            OutputStreamWriter writer = new OutputStreamWriter(
                    urlConn.getOutputStream());
            writer.write(urlParameters);
            writer.flush();
            
            //get output in outputString 
            String line, outputString = "";
            BufferedReader reader = new BufferedReader(new InputStreamReader(
                    urlConn.getInputStream()));
            while ((line = reader.readLine()) != null) {
                outputString += line;
            }
            System.out.println(outputString);
            
            //get Access Token 
            JsonObject json = (JsonObject)new JsonParser().parse(outputString);
            String access_token = json.get("access_token").getAsString();
            System.out.println(access_token);

            //get User Info 
            url = new URL("https://www.googleapis.com/oauth2/v1/userinfo?access_token=" + access_token);
            urlConn = url.openConnection();
            outputString = "";
            reader = new BufferedReader(new InputStreamReader(
                    urlConn.getInputStream()));
            while ((line = reader.readLine()) != null) {
                outputString += line;
            }
            System.out.println(outputString);
            
            // Convert JSON response into Pojo class
            GooglePojo data = new Gson().fromJson(outputString, GooglePojo.class);
            System.out.println(data);
            writer.close();
            reader.close();
            response.setContentType("text/html");  
            PrintWriter pw=response.getWriter();
                      		
            response.sendRedirect("main.html"+"?"+data.name);  
              
            pw.close();  
            
        } catch (MalformedURLException e) {
            System.out.println( e);
        } catch (ProtocolException e) {
            System.out.println( e);
        } catch (IOException e) {
            System.out.println( e);
        }
        System.out.println("leaving doGet");
      
    }
   
}
