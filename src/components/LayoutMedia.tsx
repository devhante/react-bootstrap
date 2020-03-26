import React from 'react';
import './LayoutMedia.css';
import { Media } from 'react-bootstrap';

export default class LayoutMedia extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <h2>Media Objects</h2>
                <Media>
                    <img width={64} height={64} className="mr-3" src={require('../images/cat.svg')} alt="Generic placeholder" />
                    <Media.Body>
                        <h5>Media Heading</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium sequi minus ex harum porro, quasi vitae dolorum laboriosam, eligendi quae iusto mollitia, architecto molestiae ipsum veritatis adipisci facilis officia perspiciatis nobis nihil aliquam provident alias velit! Cupiditate minima ad a labore magnam iusto? Debitis obcaecati necessitatibus, repudiandae sed tenetur officiis!</p>
                    </Media.Body>
                </Media>

                <div className="space" />

                <h2>Media Nesting</h2>
                <Media>
                    <img width={64} height={64} className="mr-3" src={require('../images/cat.svg')} alt="Generic placeholder" />
                    <Media.Body>
                        <h5>Media Heading</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequatur molestiae quis ullam placeat officia voluptatem, distinctio ratione suscipit dignissimos nobis iste quaerat quia omnis nemo quos aperiam similique sequi perspiciatis minus? Nemo suscipit at voluptatibus obcaecati optio explicabo velit, nesciunt aspernatur sapiente, voluptas provident nam, ratione adipisci excepturi quaerat?</p>
                        <Media>
                            <img width={64} height={64} className="mr-3" src={require('../images/cat.svg')} alt="Generic placeholder" />
                            <Media.Body>
                                <h5>Media Heading</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis harum libero omnis enim rem possimus quos iusto perferendis a saepe, laborum, pariatur ad recusandae itaque obcaecati minus architecto, quod similique praesentium. At dolores atque officia dolor rerum doloribus eius blanditiis. Necessitatibus dolorem officia minima vero et in quis, sunt iusto.</p>
                            </Media.Body>
                        </Media>
                    </Media.Body>
                </Media>

                <div className="space" />
                
                <h2>Media Alignment</h2>
                <Media>
                    <img width={64} height={64} className="align-self-start mr-3" src={require('../images/cat.svg')} alt="Generic placeholder" />
                    <Media.Body>
                        <h5>Media Heading</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, aliquam! Quia ut ratione fugiat, ipsum cum perspiciatis laborum? Praesentium expedita numquam nihil quidem amet officiis sunt molestias asperiores adipisci saepe autem, dolor suscipit earum dignissimos. Suscipit, praesentium? Quam facere recusandae libero aspernatur voluptatum? Nemo consequatur velit at sit, quibusdam quod?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatibus esse distinctio, beatae eius reiciendis hic nulla! Velit nesciunt, mollitia vero provident quisquam ab fugit quia? Eius exercitationem saepe rem.</p>
                    </Media.Body>
                </Media>
                <Media>
                    <img width={64} height={64} className="align-self-center mr-3" src={require('../images/cat.svg')} alt="Generic placeholder" />
                    <Media.Body>
                        <h5>Media Heading</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, aliquam! Quia ut ratione fugiat, ipsum cum perspiciatis laborum? Praesentium expedita numquam nihil quidem amet officiis sunt molestias asperiores adipisci saepe autem, dolor suscipit earum dignissimos. Suscipit, praesentium? Quam facere recusandae libero aspernatur voluptatum? Nemo consequatur velit at sit, quibusdam quod?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatibus esse distinctio, beatae eius reiciendis hic nulla! Velit nesciunt, mollitia vero provident quisquam ab fugit quia? Eius exercitationem saepe rem.</p>
                    </Media.Body>
                </Media>
                <Media>
                    <img width={64} height={64} className="align-self-end mr-3" src={require('../images/cat.svg')} alt="Generic placeholder" />
                    <Media.Body>
                        <h5>Media Heading</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, aliquam! Quia ut ratione fugiat, ipsum cum perspiciatis laborum? Praesentium expedita numquam nihil quidem amet officiis sunt molestias asperiores adipisci saepe autem, dolor suscipit earum dignissimos. Suscipit, praesentium? Quam facere recusandae libero aspernatur voluptatum? Nemo consequatur velit at sit, quibusdam quod?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatibus esse distinctio, beatae eius reiciendis hic nulla! Velit nesciunt, mollitia vero provident quisquam ab fugit quia? Eius exercitationem saepe rem.</p>
                    </Media.Body>
                </Media>

                <div className="space" />

                <h2>Media Order</h2>
                <Media>
                    <Media.Body>
                        <h5>Media Heading</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut praesentium veniam atque commodi ipsam in libero esse magni natus suscipit vel quisquam numquam, laudantium autem, est error non tempore. Sapiente eos harum nobis dolorem ex illum voluptatum, obcaecati recusandae placeat sint. Asperiores dolore eius quia quasi fuga et repellendus tempore?</p>
                    </Media.Body>
                    <img width={64} height={64} className="mr-3" src={require('../images/cat.svg')} alt="Generic placeholder" />
                </Media>

                <div className="space" />

                <h2>Media List</h2>
                <ul className="list-unstyled">
                    <Media as="li">
                        <img width={64} height={64} className="mr-3" src={require('../images/cat.svg')} alt="Generic placeholder" />
                        <Media.Body>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo odit adipisci, at iste repudiandae sequi incidunt, voluptates iusto eos facilis quam aut animi. Eum ipsam quos natus expedita, facilis nihil velit ducimus, minus soluta iure molestiae delectus laborum perferendis dolorem rerum. Ab itaque delectus ad sunt facere repudiandae obcaecati ea.</p>
                        </Media.Body>
                    </Media>
                    <Media as="li">
                        <img width={64} height={64} className="mr-3" src={require('../images/cat.svg')} alt="Generic placeholder" />
                        <Media.Body>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo odit adipisci, at iste repudiandae sequi incidunt, voluptates iusto eos facilis quam aut animi. Eum ipsam quos natus expedita, facilis nihil velit ducimus, minus soluta iure molestiae delectus laborum perferendis dolorem rerum. Ab itaque delectus ad sunt facere repudiandae obcaecati ea.</p>
                        </Media.Body>
                    </Media>
                    <Media as="li">
                        <img width={64} height={64} className="mr-3" src={require('../images/cat.svg')} alt="Generic placeholder" />
                        <Media.Body>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo odit adipisci, at iste repudiandae sequi incidunt, voluptates iusto eos facilis quam aut animi. Eum ipsam quos natus expedita, facilis nihil velit ducimus, minus soluta iure molestiae delectus laborum perferendis dolorem rerum. Ab itaque delectus ad sunt facere repudiandae obcaecati ea.</p>
                        </Media.Body>
                    </Media>
                </ul>
            </React.Fragment>
        );
    }
}