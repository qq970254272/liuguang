	private static final int corePoolSize = 40;
	private static final int maximumPoolSize = 40;
	private static final long keepAliveTime = 30;
	private static final TimeUnit unit = TimeUnit.SECONDS;
	
	LinkedBlockingQueue<Runnable> workers = new LinkedBlockingQueue<Runnable>();
	ThreadPoolExecutor excutor = new ThreadPoolExecutor(corePoolSize,
			maximumPoolSize, keepAliveTime, unit, workers);
			
			
	public void {
		
			for (Integer sid : sidList) {
				DeviceTaskRun tr = context.getBean(DeviceTaskRun.class);
				tr.init(sid);
				excutor.execute(tr);
			}
	}
