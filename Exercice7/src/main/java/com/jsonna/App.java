package com.jsonna;
import java.util.Properties;

import com.jsonna.Reader.DatabaseReader;
import com.jsonna.Reader.FileReader;
import com.jsonna.Reader.Reader;
import java.io.FileInputStream;
import java.io.IOException;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Jsonna App!" );
        try {
            Properties properties = new Properties();
            properties.load(new FileInputStream("src/main/resources/application.properties"));
            String readerType = properties.getProperty("reader.type");

            Reader reader;
            if ("FILE".equals(readerType)) {
                reader = new FileReader();
            } else if ("JDBC".equals(readerType)) {
                reader = new DatabaseReader();
            } else {
                throw new IllegalArgumentException("Invalid reader type specified");
            }

            reader.read();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
