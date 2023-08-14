package com.kmong.kmongdemo.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class ServiceTypeDTO {
    @JsonProperty("serviceTypeCode")
    private String serviceTypeCode;

    @JsonProperty("serviceTypeName")
    private String serviceTypeName;

    @JsonProperty("mandatoryInput")
    private int mandatoryInput;


}
