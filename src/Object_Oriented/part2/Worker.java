/**
 * 생성자를 이용한 의존 객체 주입
package Object_Oriented.part2;

public class Worker {
    private JobQueue jobQueue;
    private Transcoder transcoder;

    // 외부에서 사용할 객체를 전달받을 수 있는 방법 제공
    public Worker(JobQueue jobQueue, Transcoder transcoder) {
        this.jobQueue = jobQueue;
        this.transcoder = transcoder;
    }

    public void run() {
        while (someRunningCondition) {
            JobData jobData = jobQueue.getJob();
            transcoder.transcode(jobData.getSource(), jobData.getTarget());
        }
    }

    ...
}

public class JobCLI {
    private JobQueue jobQueue;

    public JobCLI(JobQueue jobQueue) {
        this.jobQueue = jobQueue;
    }

    public void interact() {
        ...
        jobQueue.addJob(new JobData(source, target));
        ...
    }
}
*/
