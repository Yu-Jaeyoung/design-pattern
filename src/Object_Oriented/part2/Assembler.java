/**
 * 객체 조립 역할을 수행하는 클래스를 별도로 분리
package Object_Oriented.part2;

public class Assembler {
    public void createAndWire() {
        JobQueue jobQueue = new FileJobQueue();
        Transcoder transcoder = new FfmpegTrasncoder();
        this.worker = new Worker(jobQueue, transcoder);
        this.jobCLI = new JobCLI(jobQueue);
    }

    public Worker getWorker() {
        return this.worker;
    }

    public JobCLI getJobCLI(){
        return this.jobCLI;
    }
    ...
}
*/
