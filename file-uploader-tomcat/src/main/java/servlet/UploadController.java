package main.java.servlet;

import main.java.util.indentifier.ImageIndentifier;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;

@WebServlet(urlPatterns = {"/upload"})
@MultipartConfig(fileSizeThreshold = 1024 * 1024
        , maxFileSize = 1024 * 1024 * 5
        , maxRequestSize = 1024 * 1024 * 5 * 5)

public class UploadController extends HttpServlet {
    static public Logger log = LogManager.getLogger();
    private static final String UPLOAD_DIR = "images";

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        File fileSaveDir = new File(UPLOAD_DIR);
        if(!fileSaveDir.exists()){
            fileSaveDir.mkdirs();
        }
        String uploadFileDir = fileSaveDir.getAbsolutePath();
        request.getParts().forEach(part -> {
            try {
                String fileName = part.getSubmittedFileName();
                part.write(uploadFileDir + File.separator + fileName);
                String message = "";

                if (!ImageIndentifier.isImage(fileName)) {
                    message = "Please, load an image";
                    log.error("Upload failed");
                } else {
                    message = "Successful upload";
                }
                log.info("Upload success");
                request.setAttribute("upload_result", message);

            } catch (IOException e) {
                request.setAttribute("upload_result", "Failed upload");
                log.error("Upload failed");
            }
        });

        request.getRequestDispatcher("index.jsp").forward(request, response);
    }
}

