package com.example.backend;

import com.example.backend.controller.TestController;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Map;

@SpringBootTest
@AutoConfigureMockMvc
@Slf4j
class BackendApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper mapper;

    @Test
    void contextLoads() throws Exception {
        TestController.LoginDto dto = new TestController.LoginDto("comscg", "comscg");

        String json = mapper.writeValueAsString(dto);
        log.info(json);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("/api/user")
                .content(json)
                .contentType(MediaType.APPLICATION_JSON_VALUE);

        mockMvc.perform(mockRequest)
                .andExpect(mvcResult -> {
                    MockHttpServletResponse response = mvcResult.getResponse();
                    log.info(response.getContentAsString());

                    Map<String, String> map = mapper.readValue(response.getContentAsString(), Map.class);

                    Assertions.assertEquals("hello "+dto.getUserName(), map.get("message"));
                });
    }



}
