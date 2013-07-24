package com.thoughtworks.zhanhonglai.data;

public class UpdateDate {
    private String year;
    private String month;
    private String day;

    public UpdateDate(String year, String month, String day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    public UpdateDate() {
        this.year = "1988";
        this.month = "07";
        this.day = "29";
    }
}
