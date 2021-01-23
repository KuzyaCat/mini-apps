package main.java.util.indentifier;

public class ImageIndentifier {
    public static boolean isImage(String fileName) {
        String expansion = fileName.substring(fileName.lastIndexOf("."));
        return expansion.compareTo(".jpg") == 0 || expansion.compareTo(".png") == 0 || expansion.compareTo(".jpeg") == 0;
    }
}
