package buglog;

import java.io.IOException;
import javax.servlet.http.*;

@SuppressWarnings("serial")
public class _BuglogServlet extends HttpServlet {
	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		String username=req.getParameter("username");
		String password=req.getParameter("password");
		resp.setContentType("text/plain");
		if(username.equals("admin") && password.equals("admin")) {
		resp.getWriter().println("Successfully logged in");
		}
		else {
		resp.getWriter().println("Please enter valid username and password.");
		}
	}
}
