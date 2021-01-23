package main.java;

import main.java.controller.menu.MainMenu;

import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        MainMenu menu = new MainMenu();
        menu.init();
    }
}
