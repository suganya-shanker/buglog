package buglog;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.repackaged.com.google.gson.Gson;

@SuppressWarnings("serial")
public class SaveDetailsServlet extends HttpServlet {
	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		System.out.println("servlet");
		BufferedReader reader = req.getReader();
		Gson gson = new Gson();
		IssueDetails issue = gson.fromJson(reader, IssueDetails.class);
		String title = issue.title;
		String count = issue.count;
		String description = issue.description;
		String chatlink = issue.chatlink;
		String assignedto = issue.assignedto;
		String createdby = issue.createdby;
		String createdon = issue.createdon;
		String closedby = issue.closedby;
		String closedon = issue.closedon;
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		Entity issueitem = new Entity("issues", title);// entity with primary key "issue name"- title
		issueitem.setProperty("Title", title);
		issueitem.setProperty("Count", count);
		issueitem.setProperty("Description", description);
		issueitem.setProperty("Chatlink", chatlink);
		issueitem.setProperty("Assignedto", assignedto);
		issueitem.setProperty("Createdby", createdby);
		issueitem.setProperty("Createdon", createdon);
		issueitem.setProperty("Closedby", closedby);
		issueitem.setProperty("Closedon", closedon);
		datastore.put(issueitem);
		resp.setContentType("text/plain");
		resp.getWriter().println(title + count + description + chatlink + assignedto + createdby + createdon + closedby
				+ closedon + " saved successfully");

	}
}
