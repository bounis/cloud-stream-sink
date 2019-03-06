package com.sink.sink;

import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.cloud.stream.messaging.Sink;

@EnableBinding(Sink.class)
public class MySink {

    @StreamListener(Sink.INPUT)
    public void process(String msg) {
        System.out.println("receiving...");
        System.out.println(msg);
    }
}
