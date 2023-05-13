/**
 * 의존 객체를 찾을 때 사용되는 Locator의 구현 예시
package Object_Oriented.part2;

public class Locator {
    private static Locator instance;

    public static Locator getInstance() {
        return instance;
    }

    public static void init(Locator locator) {
        this.instance = locator;
    }

    private JobQueue jobQueue;
    private Transcoder transcoder;

    public Locator(JobQueue jobQueue, Transcoder transcoder) {
        this.jobQueue = jobQueue;
        this.transcoder = transcoder;
    }

    public JobQueue getJobQueue() {
        return jobQueue;
    }

    public Transcoder getTranscoder() {
        return transcoder;
    }
}
*/
