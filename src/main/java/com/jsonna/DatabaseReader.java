package com.jsonna;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import org.apache.commons.io.FileUtils;
import java.io.File;
import java.io.IOException;

public class DatabaseReader {
    public static void main(String[] args) {
        String url = "jdbc:postgresql://SG-hetic-mt4-java-5275-pgsql-master.servers.mongodirector.com:5432/TP";
        String user = "etudiant";
        String password = "MT4@hetic2324";

        String query = "SELECT * FROM fichier WHERE type = 'OP'";

        try (Connection con = DriverManager.getConnection(url, user, password);
                Statement st = con.createStatement();
                ResultSet rs = st.executeQuery(query)) {

            List<String> lines = new ArrayList<>();
            while (rs.next()) {
                int ligneId = rs.getInt("ligneid");
                int param1 = rs.getInt("param1");
                int param2 = rs.getInt("param2");
                String operateur = rs.getString("operateur");
                int index = rs.getInt("index");
                int fichierId = rs.getInt("fichier_id");
                lines.add(
                        String.format("%d, %d, %d, %s, %d, %d", ligneId, param1, param2, operateur, index, fichierId));
            }

            File file = new File("outputFile.txt");
            FileUtils.writeLines(file, lines);
        } catch (SQLException | IOException e) {
            e.printStackTrace();
        }
    }
}