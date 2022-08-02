import Image from "next/image";
import React from "react";
import { blogImages } from "../../constants";

const DeepLearningApplications = () => {
  return (
    <div className="prose prose-xl w-[80%] mx-auto prose-h5:font-bold">
      <h1>Introduction to Deep Learning and its Applications</h1>
      <Image
        src={blogImages.deepLearningApplications}
        alt="deep Learning and its applications"
      />
      <p>
        Artificial Intelligence is one of the burning topics in today’s world
        and deep learning is the subset of machine learning in artificial
        intelligence.
      </p>

      <p>
        Deep Learning is continuously amusing us with its modern possibilities
        like self-driving cars, fraud detection, and many more.
      </p>

      <p>
        Earlier we never imagined the things which are possible today and now we
        cannot even imagine a day without using it. Thus, in this blog, we are
        going to discuss this very interesting topic ‘Deep Learning’ in much
        more detail.
      </p>

      <p>
        Deep Learning is at the beginning of what machines can do and developers
        and business leaders totally need to comprehend what it is and how it
        functions.
      </p>

      <p>
        Deep learning models are sufficiently competent to focus on the exact
        features themselves by requiring a little direction from the programmer
        and are useful in taking care of the issue of dimensionality. Therefore,
        deep learning algorithms are used, particularly when we have a vast
        number of inputs and outputs.
      </p>

      <p>
        So, moving forward let us further understand in detail several aspects
        of deep learning!
      </p>

      <h5>Why is it called Deep Learning?</h5>

      <p>
        Deep learning is an artificial intelligence work that mirrors the
        activities of the human brain in preparing information and making signs
        for use in decision making. It is also called deep neural learning or
        deep neural network.
      </p>

      <p>
        It is a kind of machine learning that prepares a computer to perform
        human-like errands, for example, perceiving speech, distinguishing
        pictures, or making forecasts.
      </p>

      <p>
        Rather than arranging information to go through predefined conditions,
        deep learning sets up essential boundaries about the information and
        trains the computer to learn on its own by perceiving designs using
        numerous layers of processing.
      </p>

      <p>
        Deep learning has networks worthy of learning unsupervised from
        information that is unstructured or unlabeled. In simple language, deep
        learning is a type of algorithm that appears to work certainly well for
        anticipating things.{" "}
      </p>

      <p>
        The working of deep learning includes training the data and learning
        from past experiences. It is a promising method that makes it
        conceivable to teach computers something. This piece of machine learning
        imitates a human neural network. This artificial neural network saves us
        time since it keeps individuals from performing monotonous activities
        and this procedure diminishes the risk of human blunder and hence has
        total added esteem.
      </p>

      <p>
        <h5>Advantages</h5>
        The deep learning architecture is flexible to be fitted to new troubles
        in the future. It has the proficiency to develop new features from the
        limited convenient training data sets.
      </p>

      <p>
        <h5>Disadvantages</h5>
        Due to complicated data models, it is very expensive to train. It is
        tough to adopt by less skilled people as there is no basic theory to
        teach you in choosing the correct deep learning tools.
      </p>

      <p>
        How does it work? Deep learning works on the concept of repeated
        teaching. It trains the computer so that it can understand a particular
        pattern and also identifies a picture or voice. After recognizing, the
        computer can automatically catch that word or voice. This way of
        learning is not much different from how we humans learn. While we were
        kids we also learned to say a word by listening to things around us.
        This is how we learned and now deep learning is using this formula to
        teach computers.
      </p>

      <p>
        <h5>Importance of Deep Learning</h5>
        Deep learning is very much important as it makes our task accurate and
        fast. The capacity to process large numbers of details makes deep
        learning very strong when handling with undeveloped data. Hence,
        computer vision is an immense example of a task that deep learning has
        altered into something logical for business applications. Deep learning
        makes it possible to identify faces on Facebook.
      </p>

      <h6>Applications of Deep Learning</h6>

      <ul>
        <li>Self Driving Cars</li>
        <li>Virtual Assistants</li>
        <li>Virtual Recognition</li>
        <li>Natural language processing</li>
        <li>Entertainment</li>
        <li>Fraud Detection</li>
      </ul>
    </div>
  );
};

export default DeepLearningApplications;
