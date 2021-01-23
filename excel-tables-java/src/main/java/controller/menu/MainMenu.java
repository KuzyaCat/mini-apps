package main.java.controller.menu;

import main.java.tablesheetIO.TableReader;
import main.java.tablesheetIO.TableWriter;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.IOException;
import java.util.Scanner;

public class MainMenu {
    static Logger logger = LogManager.getLogger();

    private final static String FILE_PATH = System.getProperty("user.dir") + "/src/main/resources/test.xls";

    private void read() {
        TableReader tableReader = new TableReader();
        try {
            tableReader.read(FILE_PATH);
            logger.info("Read success");
        } catch (IOException e) {
            logger.error(e.getMessage());
        }
    }

    private void write() {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter the row number:");
        int rowNumber = in.nextInt();

        System.out.println("Enter the cell number:");
        int cellNumber = in.nextInt();
        in.nextLine();

        System.out.println("Enter the value:");
        String cellValue = in.nextLine();

        TableWriter tableWriter = new TableWriter();
        try {
            tableWriter.write(FILE_PATH, rowNumber, cellNumber, cellValue);
            logger.info("Write success");
        } catch (IOException e) {
            logger.error(e.getMessage());
        }
    }

    public void init() {
        int variant;
        do {
            this.showVariants();
            variant = this.getVariant();
            switch(variant) {
                case 1:
                    this.read();
                    break;
                case 2:
                    this.write();
                    break;
                default:
                    System.out.println("Choose the correct variant!");
                    break;
            }
        } while (variant != 3);
    }

    private void showVariants() {
        System.out.println("Choose:");
        System.out.println(
                "1. Read\n" +
                "2. Write / Update\n" +
                "3. Exit\n"
        );
    }

    private int getVariant() {
        Scanner in = new Scanner(System.in);
        return in.nextInt();
    }
}
