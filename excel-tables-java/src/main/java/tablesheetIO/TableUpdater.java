package main.java.tablesheetIO;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;

public class TableUpdater {
    public void update(String path, int rowNumber, int cellNumber, String value) throws IOException {
        File file  = new File(path);
        FileInputStream inputStream = new FileInputStream(file);
        HSSFWorkbook workbook = new HSSFWorkbook(inputStream);
        HSSFSheet sheet = workbook.getSheetAt(0);

        HSSFCell cell = sheet.getRow(rowNumber).getCell(cellNumber);
        cell.setCellValue(value);

        inputStream.close();

        FileOutputStream out = new FileOutputStream(file);
        workbook.write(out);
        out.close();

    }

}
