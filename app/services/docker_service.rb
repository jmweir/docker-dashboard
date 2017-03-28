class DockerService
    def info
        Docker.info
    end
    
    def containers
        Docker::Container.all(all: true).map do |c|
            {
                id: c.id,
                name: c.info['Names'].first,
                image: c.info['Image'],
                cmd: c.info['Command'],
                state: c.info['State'],
                status: c.info['Status']
            }
        end        
    end    

    def start(id)
        Docker::Container.get(id).start!
    end
    
    def stop(id)
        Docker::Container.get(id).stop!
    end
    
    def rm(id)
        Docker::Container.get(id).remove
    end
    
end
