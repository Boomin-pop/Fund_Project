package com.kmong.kmongdemo.domain;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ServiceDTO {
    private int serviceID;
    private String splID;
    private String serviceStatus;
    private String serviceTitle;
    private String serviceTopCatCode;
    private String serviceType1;
    private String serviceType2;
    private String serviceType3;
    private String serviceType4;

    @Builder.Default
    private String serviceType5 = "";
    @Builder.Default
    private String serviceType6 = "";
    @Builder.Default
    private String serviceType7 = "";
    @Builder.Default
    private String serviceType8 = "";
    @Builder.Default
    private String serviceType9 = "";
    @Builder.Default
    private String serviceType10 = "";
    

    private int keywordIsExist;
    
    @Builder.Default
    private String keyword1 = "";
    @Builder.Default
    private String keyword2 = "";
    @Builder.Default
    private String keyword3 = "";
    @Builder.Default
    private String keyword4 = "";
    @Builder.Default
    private String keyword5 = "";

    private String priceTitle;
    private String priceExplain;
    private int priceNumber;
    private int serviceDuration;
    private int serviceModNum;

    @Builder.Default
    private int AddOptExist1 = 0;
    private String AddOptTitle1;
    private String AddOPtExplain1;
    private int AddOptPrice1;
    private int AddOptDay1;

    @Builder.Default
    private int AddOptExist2 = 0;
    private String AddOptTitle2;
    private String AddOPtExplain2;
    private int AddOptPrice2;
    private int AddOptDay2;
    @Builder.Default
    private int AddOptExist3 = 0;
    private String AddOptTitle3;
    private String AddOPtExplain3;
    private int AddOptPrice3;
    private int AddOptDay3;

    @Builder.Default
    private int AddOptExist4 = 0;
    private String AddOptTitle4;
    private String AddOPtExplain4;
    private int AddOptPrice4;
    private int AddOptDay4;

    @Builder.Default
    private int AddOptExist5 = 0;
    private String AddOptTitle5;
    private String AddOPtExplain5;
    private int AddOptPrice5;
    private int AddOptDay5;

    @Builder.Default
    private int AddOptExist6 = 0;
    private String AddOptTitle6;
    private String AddOPtExplain6;
    private int AddOptPrice6;
    private int AddOptDay6;

    @Builder.Default
    private int AddOptExist7 = 0;
    private String AddOptTitle7;
    private String AddOPtExplain7;
    private int AddOptPrice7;
    private int AddOptDay7;

    @Builder.Default
    private int AddOptExist8 = 0;
    private String AddOptTitle8;
    private String AddOPtExplain8;
    private int AddOptPrice8;
    private int AddOptDay8;

    @Builder.Default
    private int AddOptExist9 = 0;
    private String AddOptTitle9;
    private String AddOPtExplain9;
    private int AddOptPrice9;
    private int AddOptDay9;

    @Builder.Default
    private int AddOptExist10 = 0;
    private String AddOptTitle10;
    private String AddOPtExplain10;
    private int AddOptPrice10;
    private int AddOptDay10;

    private String serviceExplain;
    private String serviceProcedure;
    private String clientPreps;
    private String mainImg;

    private int subImgExist;
    private String subImg1;
    private String subImg2;
    private String subImg3;
    private String subImg4;
    private String subImg5;
    private String subImg6;
    private String subImg7;
    private String subImg8;
    private String subImg9;


}
