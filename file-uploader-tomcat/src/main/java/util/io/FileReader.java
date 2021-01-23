package main.java.util.io;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class FileReader {
    static public Logger log = LogManager.getLogger();

    private File file;

    public FileReader(File file) {
        this.file = file;
    }

    public String readFile() throws FileNotFoundException {
        StringBuilder content = new StringBuilder();
        java.io.FileReader fileRead = new java.io.FileReader(file);
        Scanner fileScanner = new Scanner(fileRead);

        while (fileScanner.hasNextLine()){
            content.append(fileScanner.nextLine()).append("<br>");
        }

        try {
            fileRead.close();
        }
        catch (Exception e){
            log.error(e.getMessage());
        }

        return content.toString();
    }
}
