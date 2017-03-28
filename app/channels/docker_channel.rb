class DockerChannel < ApplicationCable::Channel
    def initialize(connection, identifier, params = {})
        super
        @service = DockerService.new
        # background_every_n_seconds(5) do
        #     info
        # end
    end
        
    def subscribed
        info
    end
    
    def unsubscribed
    end
    
    def info
        transmit message: :info, info: @service.info, containers: @service.containers
    end    

    def start(data)
        @service.start data['id']
    end
    
    def stop(data)
        @service.stop data['id']
    end
    
    def rm(data)
        @service.rm data['id']
    end
    
    private

    def background_every_n_seconds(n)
        fork do
            loop do
                before = Time.now
                yield
                interval = n-(Time.now-before)
                sleep(interval) if interval > 0
            end
        end
    end
end
