package main.java.servlet;

import main.java.util.indentifier.ImageIndentifier;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

@WebServlet("/images/*")
public class ImageController extends HttpServlet {
    private static final String UPLOAD_DIR = "images";

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String fileName = request.getPathInfo().substring(1);

        if (ImageIndentifier.isImage(fileName))  {
            File file = new File(UPLOAD_DIR + "/", fileName);
            response.setHeader("Content-Type", getServletContext().getMimeType(fileName));
            response.setHeader("Content-Length", String.valueOf(file.length()));
            response.setHeader("Content-Disposition", "inline; filename=\"" + fileName + "\"");
            Files.copy(file.toPath(), response.getOutputStream());
        }
    }
}