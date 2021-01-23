package main.java.servlet;

import main.java.util.indentifier.ImageIndentifier;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import main.java.util.io.FileReader;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.Objects;

@WebServlet(urlPatterns = {"/read"})
public class ReadController extends HttpServlet {
    static public Logger log = LogManager.getLogger();
    private static final String UPLOAD_DIR = "images";

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int length = Objects.requireNonNull((new File(UPLOAD_DIR)).list()).length;
        String fileName = Objects.requireNonNull((new File(UPLOAD_DIR)).list())[length - 1];
        request.setAttribute("fileName", fileName);

        File file = new File(UPLOAD_DIR, fileName);

        if (!ImageIndentifier.isImage(fileName)) {
            String message = "Please, load an image";
            request.setAttribute("fileContent", message);
            request.getRequestDispatcher("pages/image.jsp").forward(request, response);
            return;
        }

        if(!file.exists()){
            String message = "File doesn't exist!";
            log.error("File doesn't exist");
            request.setAttribute("fileContent", message);
            request.getRequestDispatcher("pages/image.jsp").forward(request, response);
            return;
        }

        FileReader fileReader = new FileReader(file);
        String content = fileReader.readFile();

        request.setAttribute("fileContent", content);
        request.getRequestDispatcher("pages/image.jsp").forward(request, response);
    }


}

