import { Body, Controller, Delete, Get, Post, Query, Response, Route, SuccessResponse, Tags } from "tsoa";

@Route("api")
@Tags("git")
export class GitController extends Controller {
    @SuccessResponse(200, "Found")
    @Get("helloworld")
    public async helloworld(): Promise<string> {
        return "hello world";
    }
}
