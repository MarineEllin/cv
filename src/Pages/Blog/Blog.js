import styles from "./Blob.module.scss";

export default function Blog() {
  return (
    <div
      className={`${styles.blogContainer} d-flex flex-column justify-content-start align-items-center`}
    >
      <div
        className={`${styles.blogContent} d-flex flex-column justify-content-center align-items-start`}
      >
        <div className={styles.title}>
          Comment créer une API avec Spring Boot ? Et la tester avec Postman ?
        </div>
        <details className="d-flex flex-column align-items-start">
          <summary className={styles.subtitle}>
            Générez la base du projet avec Spring Initializr
          </summary>
          <div className={styles.paragraph}>
            <div>
              <p className="mb-10">
                1. Sur{" "}
                <a href="https://start.spring.io/" className={styles.link}>
                  Spring Initializr
                </a>{" "}
                :
              </p>
            </div>
            <div className={styles.imgAndSteps}>
              <img
                src="spring_initializr.JPG"
                alt="spring_initializr"
                className={styles.image}
              />
              <div className="text-align-left ml-10">
                Sélectionner les dépendances suivantes :
                <ul className={styles.stepsList}>
                  <li className="ml-20 my-10">
                    <i className="fa-solid fa-check mr-5"></i>Spring Web :
                    module fournissant les fonctionnalités de base pour la
                    création d'application web.
                  </li>
                  <li className="ml-20 my-10">
                    <i className="fa-solid fa-check mr-5"></i>MySQL Driver :
                    permet à une application Java d'interagir avec une base de
                    données MySQL.
                  </li>
                  <li className="ml-20 my-10">
                    <i className="fa-solid fa-check mr-5"></i>Spring Data JPQ :
                    permet de gérer la persistance des données avec la base de
                    données.{" "}
                  </li>
                  <li className="ml-20 my-10">
                    <i className="fa-solid fa-check mr-5"></i>Lombok (optionel)
                    qui permet d'optimiser certaines classes et notamment de ne
                    pas avoir à générer les getter et les setter.
                  </li>
                  <li className="ml-20 my-10">
                    <i className="fa-solid fa-check mr-5"></i>Spring Boot
                    DevTools (optionel) qui permet de prendre en compte les
                    modifications du code sans avoir à relancer le serveur.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-10">
              2. Cliquer sur Generate pour générer la base du projet, ce qui
              lance le téléchargement d'une archive ZIP.
            </div>
            <div className="mb-10">
              3. Dézipper l'archive (demo.zip dans notre cas)
            </div>
            <div className="mb-10">
              4. Importer le projet (dossier demo dans notre cas) dans votre IDE
              (IntelliJ dans notre exemple), vous obtenez la structure
              ci-dessous :
            </div>
            <img
              src="base_projet.JPG"
              alt="base_projet"
              className={styles.imageXL}
            />
          </div>
        </details>
        <details>
          <summary className={styles.subtitle}>Créez votre table MySQL</summary>
          <div className={styles.paragraph}>
            <p className="mb-10">
              1. Si vous avez déjà installer MySQL, vous pouvez simplement créer
              une table à l'aide de la Command Line Client (create database
              users;).
            </p>
            <p className="mb-10">
              2. Dans le cas où vous n'avez pas encore installé MySQL, vous
              pouvez le télécharger sur{" "}
              <a
                href="https://dev.mysql.com/downloads/mysql/"
                className={styles.link}
              >
                cette page
              </a>
              . Vous pouvez garder la configuation par défaut.
              <br />
              Note : en fin d'installation vous définirez un mot de passe utile
              pour l'étape suivante et vous lancez le serveur MySQL.
              <br />
              Grâce à MySQL Workbench, vous pouvez vous connecter et accéder à
              vos bases de données.
            </p>
          </div>
        </details>
        <details>
          <summary className={styles.subtitle}>
            Connectez Spring Boot à votre base de données
          </summary>
          <div className={styles.paragraph}>
            <p className="mb-10">
              1. Pour ce faire, dans le fichier application.properties, ajoutez
              :
            </p>
            <div className={styles.code}>
              <span>
                spring.datasource.url = jdbc:mysql://localhost:3306/users
              </span>
              <span>spring.datasource.username = root</span>
              <span>spring.datasource.password = LePassWordDeMaBDD</span>
              <span>spring.jpa.hibernate.ddl-auto = create-drop</span>
            </div>
            <div className={styles.warning}>
              <p className="d-flex flex-row align-items-center mt-20 mb-10">
                <i class="fa-solid fa-triangle-exclamation font-color-prussianBlue mr-5"></i>
                <p>Attention</p>
              </p>
              <p>
                La propriété de configuration{" "}
                <span className="font-color-prussianBlue">
                  spring.jpa.hibernate.ddl-auto = create-drop
                </span>{" "}
                signifie que Spring Boot créera automatiquement un schéma de
                base de données au démarrage de l'application. Ce schéma sera
                supprimé à l'arrêt de l'application. C'est idéal pour réaliser
                des tets, mais vos données seront supprimées à chaque
                redémarrage. D'autres valeurs sont utilisables : create
                (suppression de la table existante et création du schéma),
                update, validate ou none.
              </p>
            </div>
          </div>
        </details>
        <details>
          <summary className={styles.subtitle}>
            Modélisez votre table de données en entité Java
          </summary>
          <div className={styles.paragraph}>
            <p className="mb-10">
              1. Dans scr/main/java, créez un package com.exemple.demo.model.
            </p>
            <p className="mb-10">
              2. Dans ce package, créez une classe Java qui est une entité qui
              représente votre table de données (dans cet exemple mous créons
              une classe User) :
            </p>
            <div className={styles.imgAndSteps}>
              <div className={styles.code}>
                <span>package com.example.demo.model;</span>
                <br />
                <span>import jakarta.persistence.*;</span>
                <span>import lombok.Data;</span>
                <br />
                <span>@Data</span>
                <span>@Entity</span>
                <span>@Table(name = "users")</span>
                <span> public class User &#123;</span>
                <br />
                <span className="ml-20">@Id</span>
                <span className="ml-20">
                  @GeneratedValue(strategy = GenerationType.IDENTITY)
                </span>
                <span className="ml-20">private Long id;</span>
                <br />
                <span className="ml-20">@Column</span>
                <span className="ml-20">private String firstName;</span>
                <br />
                <span className="ml-20">@Column</span>
                <span className="ml-20">private String lastName;</span>
                <span>&#125;</span>
              </div>
              <div>
                <ul className={styles.stepsList}>
                  Explications :
                  <li className="ml-20 my-10">
                    <i className="fa-solid fa-check mr-5"></i>@Data est une
                    annotation Lombok qui permet notamment d'éviter de devoir
                    ajouter les accesseurs (getters et setters) de la classe,
                    Lombok s'en chargera lors de la compilation.
                  </li>
                  <li className="ml-20 my-10">
                    <i className="fa-solid fa-check mr-5"></i>@Entity est une
                    annotation qui indique que la classe correspond à une table
                    de la base de données.
                  </li>
                  <li className="ml-20 my-10">
                    <i className="fa-solid fa-check mr-5"></i>@Table est une
                    annotation permettant de préciser le nom de la table.
                  </li>
                  <li className="ml-20 my-10">
                    <i className="fa-solid fa-check mr-5"></i>Sont ensuite
                    définis les champs de la table avec @Id qui permet
                    d'indiquer qu'il s'agit de la clé primaire de la table. Afin
                    que celle-ci soit incrémentée de manière automatique, on
                    ajoute l'annotation @GeneratedValue(strategy =
                    GenerationType.IDENTITY). Les autres champs sont annotés
                    avec @Column. Dans le cas où le nom de l'attribut de la
                    classe ne correspondait pas au nom du champ de la table, il
                    faudrait préciser une correspondance, par exemple :
                    <p className="ml-20">@Column(name="first-name")</p>
                    <p className="ml-20">private String firstName;</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </details>
        <details>
          <summary className={styles.subtitle}>
            Créez le repository qui vous permettra de communiquer avec la base
            de données
          </summary>
          <div className={styles.paragraph}>
            <p className="mb-10">
              1. Dans src/main/java, créez un package
              com.example.demo.repository.
            </p>
            <p className="mb-10">
              2. Dans ce package, créez une interface UserRepository :
            </p>
            <div className={styles.imgAndSteps}>
              <div className={styles.code}>
                <span>package com.example.demo.repository;</span>
                <br />
                <span></span>
                <span>import com.example.demo.model.User;</span>
                <span>
                  import org.springframework.data.repository.CrudRepository;
                </span>
                <br />
                <span>@Repository</span>
                <span>
                  public interface UserRepository extends
                  CrudRepository&lt;User, Long&gt; &#123;
                </span>
                <br />
                <span>&#125;</span>
              </div>
              <div className={styles.stepsList}>
                Explications :
                <ul className={styles.stepsList}>
                  <li className="ml-20 my-10">
                    <i className="fa-solid fa-check mr-5"></i>@Repository est
                    une annotation Spring qui indique que la classe est un bean
                    et qu'elle a pour tâche de communiquer avec la base données.
                  </li>
                  <li className="ml-20 my-10">
                    <i className="fa-solid fa-check mr-5"></i>
                    L'interface User Repository va étendre l'interface
                    CrudRepository&lt;T, ID&gt; qui hérite de Repository&lt;T,
                    ID&gt; et qui fournit des méthodes telles que findById(),
                    findAll(), deleteById()... pour interagir avec une base de
                    données.
                    <br />T est le type de l'objet qui sera géré par le
                    repository (dans notre cas un User) et ID correspond au type
                    d'objet de la clé primaire (un Long dans notre exemple).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </details>
        <details>
          <summary className={styles.subtitle}>
            Créez un service métier pour traiter les données
          </summary>
          <div className={styles.paragraph}>
            <p className="mb-10">
              1. Dans src/main/java, créez un package com.example.demo.service
            </p>
            <p className="mb-10">
              2. Dans ce package, créez une class UserService :
            </p>
            <div className={styles.imgAndSteps}>
              <div className={styles.code}>
                <span>package com.example.demo.service;</span>
                <br />
                <span>import com.example.demo.model.User;</span>
                <span>import com.example.demo.repository.UserRepository;</span>
                <span>import lombok.Data;</span>
                <span>
                  import org.springframework.beans.factory.annotation.Autowired;
                </span>
                <span>import org.springframework.stereotype.Service;</span>
                <br />
                <span>import java.util.Optional;</span>
                <br />
                <span>@Data</span>
                <span>@Service</span>
                <span>public class UserService &#123;</span>
                <br />
                <span className="ml-20"> @Autowired</span>
                <span className="ml-20">
                  private UserRepository userRepository;
                </span>
                <br />
                <span className="ml-20">
                  public Optional&lt;User&gt; getUser(Long id)&#123;
                </span>
                <span className="ml-40">
                  Optional&lt;User&gt; myUser = userRepository.findById(id);
                </span>
                <span className="ml-40">
                  myUser.get().setFirstName(myUser.get().getFirstName().toUpperCase());
                </span>
                <span className="ml-40">
                  myUser.get().setLastName(myUser.get().getLastName().toUpperCase());
                </span>
                <span className="ml-40">return myUser;</span>
                <span className="ml-20">&#125;</span>
                <br />
                <span className="ml-20">
                  public Iterable&lt;User&gt; getAllUsers() &#123;
                </span>
                <span className="ml-40">return userRepository.findAll();</span>
                <span className="ml-20">&#125;</span>
                <br />
                <span className="ml-20">
                  public void deleteUser(Long id)&#123;
                </span>
                <span className="ml-40">userRepository.deleteById(id);</span>
                <span className="ml-20">&#125;</span>
                <br />
                <span className="ml-20">
                  public User saveUser(User user)&#123;
                </span>
                <span className="ml-40">
                  User savedUser = userRepository.save(user);
                </span>
                <span className="ml-40">return savedUser;</span>
                <span className="ml-20">&#125;</span>
                <span>&#125;</span>
              </div>
              <div className={styles.stepsList}>
                Explications :
                <ul className={styles.stepsList}>
                  <li className="ml-20 my-10">
                    <i className="fa-solid fa-check mr-5"></i>@Data est une
                    annotation Lombok qui permettra notamment de générer
                    autimatiquement les getters et setters de la classe.
                  </li>
                  <li className="ml-20 my-10">
                    <i className="fa-solid fa-check mr-5"></i>
                    @Service est une annotation Spring qui permet de déclarer un
                    bean de service, c'est à dire une couche métier. La couche
                    métier permet de réaliser des traitements métiers. Pour
                    l'exemple, on a juste transformé les noms et prénoms de
                    l'utilisateur en lettres majuscules. Mais bien évidemment on
                    peut avoir des traitements métiers bien plus complexes.
                  </li>
                  <li className="ml-20 my-10">
                    <i className="fa-solid fa-check mr-5"></i>
                    @Autowired est une annotation Spring qui va permettre
                    d'effectuer une injection de dépendance automatique. Dans
                    notre exemple, cela permet d'indiquer que nous souhaitons
                    créer une instance de la classe UserRepository et l'injecter
                    automatiquement dans notre classe UserService.
                    <br />
                    Quand Spring rencontre l'annotation @Autowired, il va
                    chercher un bean correspondant dans le contexte de
                    l'application, créer une instance de la classe et l'injecter
                    là où se trouve l'annotation @Autowired.
                  </li>
                  <li className="ml-20 my-10">
                    <i className="fa-solid fa-check mr-5"></i>
                    On créé successivement les méthodes souhaités : getUser(),
                    getAllUsers(), deleteUser()... en appliquand les règles
                    métiers nécessaires.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </details>
        <details>
          <summary className={styles.subtitle}>
            Créez vos endpoints REST
          </summary>
          <div className={styles.paragraph}>
            <p className="mb-10">
              Endpoints ? C'est à dire le points d'entrer de notre application.
              Chaque endpoint est associé à une URL et c'est en appelant cette
              URL que l'on recevra la réponse souhaitée (par exemple la liste de
              tout nos users).
            </p>
            <p className="mb-10">
              1. Dans le fichier src/main/java, créer un package
              com.example.demo.controller
            </p>
            <p className="mb-10">
              2. Dans ce package, créer une classe UserController{" "}
            </p>
            <div className={styles.imgAndSteps}>
              <div className={styles.code}>
                <span>package com.example.demo.controller;</span>
                <br />
                <span>import com.example.demo.model.User;</span>
                <span>import com.example.demo.service.UserService;</span>
                <span>
                  import org.springframework.beans.factory.annotation.Autowired;
                </span>
                <span>
                  import org.springframework.validation.annotation.Validated;
                </span>
                <span>import org.springframework.web.bind.annotation.*;</span>
                <br />
                <span>import java.util.Optional;</span>
                <br />
                <span>@RestController</span>
                <span>public class UserController &#123;</span>
                <br />
                <span className="ml-20">@Autowired</span>
                <span className="ml-20">UserService userService;</span>
                <br />
                <span className="ml-20">@GetMapping("/users")</span>
                <span className="ml-20">
                  public Iterable&lt;User&gt; getAllUsers()&#123; return
                  userService.getAllUsers(); &#125;
                </span>
                <br />
                <span className="ml-20">
                  @GetMapping("/user/&#123;id&#125;")
                </span>
                <span className="ml-20">
                  public Optional&lt;User&gt; getUser(@PathVariable("id") Long
                  id)&#123;
                </span>
                <span className="ml-40">
                  Optional&lg;User&lt; myUser = userService.getUser(id);
                </span>
                <span className="ml-40">if(myUser.isPresent()) &#123;</span>
                <span className="ml-60">return myUser;</span>
                <span className="ml-40">&#125; else &#123;</span>
                <span className="ml-60">return null;</span>
                <span className="ml-40">&#125;</span>
                <span className="ml-20">&#125;</span>
                <br />
                <span className="ml-20">
                  @DeleteMapping("/user/&#123;id&#125;")
                </span>
                <span className="ml-20">
                  public void deleteUser(@PathVariable("id") Long id)&#123;
                </span>
                <span className="ml-40">userService.deleteUser(id);</span>
                <span className="ml-20">&#125;</span>
                <br />
                <span className="ml-20">@PostMapping("/user")</span>
                <span className="ml-20">
                  public User createUser(@Validated @RequestBody User
                  user)&#123;
                </span>
                <span className="ml-40">userService.saveUser(user);</span>
                <span className="ml-40">return user;</span>
                <span className="ml-20">&#125;</span>
                <span>&#125;</span>
              </div>
              <div className={styles.stepsList}>
                Explications :
                <ul className={styles.stepsList}>
                  <li className="ml-20 my-10">
                    <i className="fa-solid fa-check mr-5"></i>@Data est une
                    annotation Lombok qui permettra notamment de générer
                    automatiquement les getters et setters de la classe.
                  </li>
                  <li className="ml-20 my-10">
                    <i className="fa-solid fa-check mr-5"></i>
                    @RestController est une annotation Spring qui indique que la
                    classe est un contrôleur qui gère les requêtes HTTP. Elle
                    indique à Spring s'insérer le retour de la méthode au format
                    JSON dans le corps de la réponse HTTP.
                  </li>
                  <li className="ml-20 my-10">
                    <i className="fa-solid fa-check mr-5"></i>
                    @GetMapping, @DeleteMapping, @PostMapping : ces annotations
                    permettent que les méthodes de la classe deviennent des
                    endpoints.
                    <br />
                    Ainsi dans notre exemple, le endpoint permettant de
                    récupérer l'ensemble des users sera :
                    http://localhost:8080/users.
                    <br />
                    Le endpoint pour récupérer un user en particulier sera par
                    exemple : http://localhost:8080/user/1.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </details>
        <details>
          <summary className={styles.subtitle}>Déployez votre API</summary>
          <div className={styles.paragraph}>
            <p>Dans le terminal : mvn spring-boot:run</p>
          </div>
        </details>
        <details>
          <summary className={styles.subtitle}>
            Tester vos endpoints avec Postman
          </summary>
          <div className={styles.paragraph}>
            <p className="mb-10">
              1. Pour installer Postman, c'est{" "}
              <a
                href="https://learning.postman.com/docs/getting-started/installation/installation-and-updates/#installing-postman-on-windows"
                className={styles.link}
              >
                par ici
              </a>
              .
            </p>
            <p className="mb-10">2. Installez et ouvrez Postman :</p>
            <img
              src="open_postman.JPG"
              alt="open_postman"
              className={styles.imageXL}
            />
            <p className="mb-10">
              3. Vous pouvez cliquer sur New Environment pour modifier le nom de
              l'environnement, par exemple : Test mon API demo.
            </p>
            <p className="mb-10">4. Cliquez sur le +.</p>

            <p className="mb-10">
              5. Choisissez dans la liste le type de requête que vous voulez
              tester et préciser l'URL correspondant à votre endpoint. Dans cet
              exemple je vais récupérer la liste de tous mes users (qui est vide
              pour le moment).
            </p>
            <img
              src="postman_query_list.JPG"
              alt="open_postman"
              className={styles.imageXL}
            />
            <p className="mb-10">
              6. Toutefois je vais pouvoir enregistrer des nouveaux users. Pour
              celà, je vais faire une requête de type POST et je n'oublie pas
              d'adapter mon endpoint. De plus, je dois préciser le body de ma
              requête au format JSON : ici Jean Dupont.
            </p>
            <img
              src="postman_post_user.JPG"
              alt="open_postman"
              className={styles.imageXL}
            />
            <p className="mb-10">
              7. Si j'affiche tous mes Users, je constate que Jean Dupont a bien
              été ajouté avec l'id 5 (5 et pas 1 juste parce que je m'étais
              amusée avant...):
            </p>
            <img
              src="postman_get_users.JPG"
              alt="open_postman"
              className={styles.imageXL}
            />
            <p className="mb-10">
              8. Je peux voir si en récupérant mon user en particulier, le nom
              et le prénom seront bien en majuscules (rappelez-vous mon service
              métier) :
            </p>
            <img
              src="postman_get_user.JPG"
              alt="open_postman"
              className={styles.imageXL}
            />
            <p className="mb-10">9. Et enfin je peux supprimer mon user :</p>
            <img
              src="postman_delete_user.JPG"
              alt="open_postman"
              className={styles.imageXL}
            />
          </div>
        </details>
      </div>
    </div>
  );
}
