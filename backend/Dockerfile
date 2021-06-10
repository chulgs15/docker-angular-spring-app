FROM maven:3.3-jdk-8 as build
WORKDIR app
COPY ./ ./
RUN mvn package -DskipTests

FROM openjdk:8-jre-alpine as runtime
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]