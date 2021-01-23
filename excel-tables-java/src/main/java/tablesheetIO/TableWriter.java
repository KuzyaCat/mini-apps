package main.java.tablesheetIO;

import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class TableWriter {
    public void write(String path, int rowNumber, int cellNumber, String value) throws IOException {
        File file  = new File(path);
        FileInputStream inputStream = new FileInputStream(file);
        HSSFWorkbook workbook = new HSSFWorkbook(inputStream);
        HSSFSheet sheet = workbook.getSheetAt(0);

        Row row;
        if (sheet.getLastRowNum() < rowNumber) {
            row = sheet.createRow(rowNumber);
        } else {
            row = sheet.getRow(rowNumber);
        }

        Cell cell;
        if (row.getLastCellNum() < cellNumber) {
            cell = row.createCell(cellNumber, CellType.STRING);
        } else {
            cell = row.getCell(cellNumber);
        }
        cell.setCellValue(value);

        FileOutputStream outFile = new FileOutputStream(file);
        workbook.write(outFile);
    }
}
